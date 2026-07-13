// The trigger's optional filter payload. Only category_added carries one.
export function triggerConfig(formData, triggerType) {
  if (triggerType !== 'category_added') return {}

  return { categoryId: formData.get('categoryId') || null }
}
