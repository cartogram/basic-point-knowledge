import {useCallback, useEffect, useState} from 'react';

import {get, remove as removeKey, set} from './utilities';

type Maybe<T> = T | null | undefined;

export interface LocalStorageReference<T> {
  value: Maybe<T>;
  refresh(): void;
  remove(): void;
  update(value: T | ((previous: Maybe<T>) => T)): void;
}

export function useLocalStorage<T>(
  key: string,
  initialValue?: T,
): [LocalStorageReference<T>] {
  const [current, setCurrent] = useState<Maybe<T>>(() =>
    get(key, initialValue),
  );
  const refresh = useCallback(() => {
    setCurrent(get(key));
  }, [key]);
  const remove = useCallback(() => {
    if (current != null) {
      removeKey(key);
      setCurrent(null);
    }
  }, [current, key]);
  const update = useCallback(
    (value: T | ((previous: Maybe<T>) => T)) => {
      set(key, value instanceof Function ? value(current) : value);

      const next = get(key);

      if (next !== current) {
        setCurrent(next);
      }
    },
    [current, key],
  );
  const [reference, setReference] = useState<LocalStorageReference<T>>(() => ({
    refresh,
    remove,
    update,
    value: current,
  }));

  useEffect(() => {
    if (current !== reference.value) {
      setReference({refresh, remove, update, value: current});
    }
  }, [current, reference.value, refresh, remove, update]);

  return [reference];
}
