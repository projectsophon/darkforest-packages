export type Subscription<T> = (data: T) => Promise<void> | void;

export type Unsubscribe = () => void;

export class Store {
  #subscriptions = new Set<Subscription<this>>();

  constructor() {
    this.#subscriptions = new Set();
  }

  async notify() {
    const subs = Array.from(this.#subscriptions);
    await Promise.all(
      subs.map((cb) => {
        // Since these are async, `unsubscribe` might have been called before this runs
        if (this.#subscriptions.has(cb)) {
          return cb(this);
        }
      })
    );
  }

  subscribe(subscription: Subscription<this>) {
    this.#subscriptions.add(subscription);

    subscription(this);

    return () => {
      this.#subscriptions.delete(subscription);
    };
  }

  clear() {
    this.#subscriptions.clear();
  }
}
