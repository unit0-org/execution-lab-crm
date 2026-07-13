// Normalizes one domain module into the shape the report reads.
export function toDomain(module) {
  return {
    ...module.domain,
    stories: module.stories.map((story) => ({
      ...story,
      guarantee: Boolean(story.guarantee),
      domainTitle: module.domain.title
    }))
  };
}
