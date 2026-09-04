export const getImageUrl = (path) =>
  new URL(`/src/assets/${path}`, import.meta.url).href;
