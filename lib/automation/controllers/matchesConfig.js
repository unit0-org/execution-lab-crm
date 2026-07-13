// Does the context satisfy the rule's optional trigger filter? An empty
// filter matches anything; today only category_added filters (by category).
export function matchesConfig(rule, ctx) {
  const wanted = rule.trigger_config?.categoryId

  if (!wanted) return true

  return ctx.categoryId === wanted
}
