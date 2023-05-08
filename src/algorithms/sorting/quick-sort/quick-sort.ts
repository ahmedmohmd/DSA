class QuickSort {
  public sort(
    array: number[],
    start: number = 0,
    end: number = array.length - 1
  ): void {
    if (start >= end) return;

    let boundary = this.partition(array, start, end);

    this.sort(array, start, boundary - 1);
    this.sort(array, boundary + 1, end);
  }

  private partition(array: number[], start: number, end: number): number {
    let pivot = array[end];
    let boundary = start - 1;

    for (let i = start; i <= end; i++) {
      if (array[i] <= pivot) {
        boundary++;
        this.swap(array, i, boundary);
      }
    }

    return boundary;
  }

  private swap(array: any[], first: number, second: number) {
    [array[first], array[second]] = [array[second], array[first]];
  }
}

export default QuickSort;
