// Typed single pub / sub pattern, inspired by:
// https://github.com/loilo/monomitter/blob/master/monomitter.mjs

export type Callback<T> = (data: T) => Promise<void> | void;

export type Subscription = {
  unsubscribe: () => void;
};

export type Monomitter<T> = {
  publish: (data: T) => Promise<void>;
  subscribe: (cb: Callback<T>) => Subscription;
  clear: () => void;
};

/**
 * Constructs a new event emitter, whose purpose is to emit values of the given type.
 */
export function monomitter<T>(): Monomitter<T> {
  const callbacks = new Set<Callback<T>>();

  async function publish(value: T) {
    const staticCallbacks = Array.from(callbacks);
    await Promise.all(
      staticCallbacks.map((cb) => {
        // Since these are async, `unsubscribe` might have been called before this runs
        if (callbacks.has(cb)) {
          return cb(value);
        }
      })
    );
  }

  function subscribe(callback: Callback<T>) {
    callbacks.add(callback);

    return {
      unsubscribe() {
        callbacks.delete(callback);
      },
    };
  }

  function clear() {
    callbacks.clear();
  }

  return {
    publish,
    subscribe,
    clear,
  };
}
