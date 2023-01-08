export const _isShallowEqual = (obj1: Record<string, string>, obj2: Record<string, string>) => {
  return Object.keys(obj1)
    .map((k) => {
      if (typeof obj1[k] === "string" && typeof obj2[k] === "string")
        return obj1[k].trim() === obj2[k].trim();
      return obj1[k] === obj2[k];
    })
    .every((item) => item === true);
};
