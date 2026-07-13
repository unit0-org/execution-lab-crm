import { database } from './connect.js';

const NO_INSTANCE = '00000000-0000-0000-0000-000000000000';
const EMAIL_PROVIDER = '{"provider":"email","providers":["email"]}';

// GoTrue reads the token columns into non-nullable strings, so they must be ''
// and not NULL — otherwise sign-in fails with "Database error querying schema".
export async function insertAuthUser(userId, email, password) {
  await database().query(
    `insert into auth.users (
       id, instance_id, aud, role, email, encrypted_password,
       email_confirmed_at, created_at, updated_at,
       raw_app_meta_data, raw_user_meta_data,
       confirmation_token, recovery_token, email_change,
       email_change_token_new, email_change_token_current,
       phone_change, phone_change_token, reauthentication_token
     ) values (
       $1, $2, 'authenticated', 'authenticated', $3,
       crypt($4, gen_salt('bf')), now(), now(), now(),
       $5::jsonb, '{}'::jsonb, '', '', '', '', '', '', '', ''
     )`,
    [userId, NO_INSTANCE, email, password, EMAIL_PROVIDER]
  );
}
