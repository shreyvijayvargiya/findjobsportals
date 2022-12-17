import Fuse from "fuse.js";

export const findSearchModule = (list, searchValue) => {
  const options = {
    includeScore: true,
    // Search in `author` and in `tags` array
    keys: ["name", "website", "description", "domain"]
  };
  const fuse = new Fuse(list, options);
  const result = fuse.search(searchValue)
  return result;
}