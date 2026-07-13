// Map domain rows to Select {value,label} options.
export const catalogOptions = (items) =>
  items.map((item) => ({ value: item.value, label: item.label }))

export const categoryOptions = (categories) =>
  categories.map((category) => ({ value: category.id, label: category.name }))

export const templateOptions = (templates) =>
  templates.map((template) => ({
    value: template.template_key, label: template.subject
  }))
