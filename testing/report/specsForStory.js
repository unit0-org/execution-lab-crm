const STORY_ID = /^(US-\d+)\b/;

// A test belongs to the story whose id its title starts with.
export function specsForStory(story, specs) {
  return specs.filter((spec) => {
    const match = STORY_ID.exec(spec.title);

    return Boolean(match) && match[1] === story.id;
  });
}
