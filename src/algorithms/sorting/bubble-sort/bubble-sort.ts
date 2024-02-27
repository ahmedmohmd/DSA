class BubbleSort {
  static sort(array: number[]): void {
    let isSorted: boolean;

    for (let i = 0; i < array.length; i++) {
      isSorted = true;

      for (let j = 0; j < array.length - i; j++) {
        if (array[j] < array[j - 1]) {
          [array[j], array[j - 1]] = [array[j - 1], array[j]];

          isSorted = false;
        }
      }

      if (isSorted) return;
    }
  }
}

export default BubbleSort;
