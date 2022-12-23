import store from "store2";

export function get(keyName: string) {
  const rawValue = store.get(keyName);
  if (rawValue !== undefined) {
    try {
      JSON.parse(rawValue);
    } catch (e) {
      return rawValue;
    }
  }
  return undefined;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function set(keyName: string, value: any) {
  return store.set(keyName, typeof value === "string" ? value : JSON.stringify(value));
}

export function clear(keyName: string) {
  return store.remove(keyName);
}

export default { get, set, clear };
