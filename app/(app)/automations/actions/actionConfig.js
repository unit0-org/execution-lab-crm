// The action's config payload, by action type.
export function actionConfig(formData, actionType) {
  if (actionType === 'send_email') {
    return { templateKey: formData.get('templateKey') || null }
  }

  return {
    title: formData.get('title') || '',
    dueInDays: formData.get('dueInDays') || ''
  }
}
