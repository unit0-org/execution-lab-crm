#!/usr/bin/env bash
# One-time GCP setup for keyless CD from GitHub Actions (see
# .github/workflows/deploy.yml + cloudbuild.yaml). Idempotent-ish: re-running
# create commands that already exist will error harmlessly. Requires an
# operator with project IAM admin. Run once:  bash scripts/setup-cd.sh
set -euo pipefail

PROJ=the-execution-lab-crm
NUM=551994562422
REPO=unit0-org/execution-lab-crm
COMPUTE="$NUM-compute@developer.gserviceaccount.com"
DEPLOYER="github-deployer@$PROJ.iam.gserviceaccount.com"

# 1. Dedicated CD service account (GitHub impersonates this — no keys).
gcloud iam service-accounts create github-deployer --project "$PROJ" \
  --display-name "GitHub Actions deployer (CD to Cloud Run)" || true

# 2. Deployer: submit Cloud Builds, upload build source, read build logs.
for role in roles/cloudbuild.builds.editor roles/storage.objectAdmin \
            roles/logging.viewer; do
  gcloud projects add-iam-policy-binding "$PROJ" \
    --member "serviceAccount:$DEPLOYER" --role "$role" --condition=None
done

# 3. Cloud Build runs its steps as the COMPUTE SA — it needs to deploy Cloud
#    Run, act as the service's runtime SA (itself), and read Secret Manager
#    (list for the --set-secrets deploy step, access versions for migrate).
gcloud projects add-iam-policy-binding "$PROJ" \
  --member "serviceAccount:$COMPUTE" --role roles/run.admin --condition=None
gcloud projects add-iam-policy-binding "$PROJ" \
  --member "serviceAccount:$COMPUTE" --role roles/secretmanager.viewer --condition=None
gcloud projects add-iam-policy-binding "$PROJ" \
  --member "serviceAccount:$COMPUTE" --role roles/secretmanager.secretAccessor --condition=None
gcloud iam service-accounts add-iam-policy-binding "$COMPUTE" --project "$PROJ" \
  --member "serviceAccount:$COMPUTE" --role roles/iam.serviceAccountUser

# 4. Workload Identity Federation pool + GitHub OIDC provider, restricted to
#    our org so only our repos can present tokens.
gcloud iam workload-identity-pools create github-pool --project "$PROJ" \
  --location global --display-name "GitHub Actions" || true
gcloud iam workload-identity-pools providers create-oidc github-provider \
  --project "$PROJ" --location global --workload-identity-pool github-pool \
  --display-name "GitHub OIDC" \
  --issuer-uri "https://token.actions.githubusercontent.com" \
  --attribute-mapping "google.subject=assertion.sub,attribute.repository=assertion.repository,attribute.repository_owner=assertion.repository_owner" \
  --attribute-condition "assertion.repository_owner == 'unit0-org'" || true

# 5. Allow ONLY this repo's Actions to impersonate the deployer SA.
gcloud iam service-accounts add-iam-policy-binding "$DEPLOYER" --project "$PROJ" \
  --role roles/iam.workloadIdentityUser \
  --member "principalSet://iam.googleapis.com/projects/$NUM/locations/global/workloadIdentityPools/github-pool/attribute.repository/$REPO"

echo "CD setup complete. Merge to main now builds → migrates → deploys."
