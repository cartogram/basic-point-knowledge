export function get(key: string, fallback?: any) {
  try {
    let result = localStorage.getItem(key);
    try {
      result = result ? JSON.parse(result) : null;
      if (result === 'undefined' || result == null) {
        return fallback == null ? null : fallback;
      }
      return result;
    } catch (error) {
      if (result === 'undefined' || result == null) {
        return fallback;
      }
      return result;
    }
  } catch (error) {
    return fallback;
  }
}

export function set(key: string, value: any) {
  try {
    return localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    // localStorage sometimes throws, we will just ignore it
  }
}

export function clear({except = []}: {except?: string[]} = {}) {
  const temporaryStore: Record<string, string> = Object.create(null);

  for (const exceptKey of except) {
    const storedItem = get(exceptKey, null);
    if (storedItem) {
      temporaryStore[exceptKey] = storedItem;
    }
  }

  try {
    const result = localStorage.clear();

    for (const exceptKey of Object.keys(temporaryStore)) {
      set(exceptKey, temporaryStore[exceptKey]);
    }

    return result;
  } catch (error) {
    // localStorage sometimes throws, we will just ignore it
  }
}

export function remove(key: string) {
  try {
    return localStorage.removeItem(key);
  } catch (error) {
    // localStorage sometimes throws, we will just ignore it
  }
}
