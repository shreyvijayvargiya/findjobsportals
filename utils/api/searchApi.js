import Fuse from "fuse.js";

export const findSearchModule = (list) => {
  const options = {
    includeScore: true,
    // Search in `author` and in `tags` array
    keys: ["author", "tags"]
  };
  const fuse = new Fuse(list, options);
  const result = fuse.search(searchValue)
  return result;
}