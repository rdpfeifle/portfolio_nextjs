export function calculateReadTime(content) {
  // average reading speed of an adult
  const wordsPerMinute = 250;

  // count the number of words in the content,
  // matching one or more white spaces
  const wordCount = content.split(/\s+/g).length;

  // calculate the estimated read time in minutes
  const readTimeMinutes = wordCount / wordsPerMinute;

  return Math.ceil(readTimeMinutes);
}
