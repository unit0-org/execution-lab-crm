// A category's rolled-up count: what its hidden links are asking for. Shown
// on the rail icon and on a closed category header, so collapsing the nav
// never hides the fact that something needs attention.
export const navBadgeTotal = (items) =>
  items.reduce((total, item) => total + (item.badge || 0), 0)
