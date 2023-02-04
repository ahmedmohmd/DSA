interface Iterator<T> {
  next(): void;
  isNext(): boolean;
  current(): T;
}

export default Iterator;
