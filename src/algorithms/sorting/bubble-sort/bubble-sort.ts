class BubbleSort {
  static sort(array: number[]): number[] {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (array[j + 1] < array[j]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }

    return array;
  }
}

export default BubbleSort;
