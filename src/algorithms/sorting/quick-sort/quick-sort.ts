class QuickSort {
  public static sort(
    array: number[],
    start: number = 0,
    end: number = array.length - 1
  ): void {
    if (start >= end) return;

    let boundary = QuickSort.partition(array, start, end);

    QuickSort.sort(array, start, boundary - 1);
    QuickSort.sort(array, boundary + 1, end);
  }

  private static partition(
    array: number[],
    start: number,
    end: number
  ): number {
    let pivot = array[end];
    let boundary = start - 1;

    for (let i = start; i <= end; i++) {
      if (array[i] <= pivot) {
        boundary++;
        QuickSort.swap(array, i, boundary);
      }
    }

    return boundary;
  }

  private static swap(array: any[], first: number, second: number) {
    [array[first], array[second]] = [array[second], array[first]];
  }
}

export default QuickSort;
