class MergeSort {
  public static sort(array: number[]): number[] {
    if (array.length === 1) return array;

    const middle: number = Math.floor(array.length / 2);
    const left: number[] = array.slice(0, middle);
    const right: number[] = array.slice(middle);

    return MergeSort.merge(MergeSort.sort(left), MergeSort.sort(right));
  }

  private static merge(left: number[], right: number[]): number[] {
    const result: number[] = [];
    let leftIndex: number = 0;
    let rightIndex: number = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
}

export default MergeSort;
