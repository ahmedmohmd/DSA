/**
 * ? Important Note:
 * ? You should Input and Sorted Array.
 */

class TernarySearch {
  public static search(array: any[], target: any) {
    return TernarySearch.doSearch(array, target, 0, array.length - 1);
  }

  private static doSearch(
    array: any[],
    target: any,
    start: number = 0,
    end: number = array.length - 1
  ): any {
    // Base Case
    if (start > end) {
      return -1;
    }

    // Algo Implementation
    let partitionSize: number = TernarySearch.getPartionSize(start, end);
    let mid1: number = start + partitionSize;
    let mid2: number = end - partitionSize;

    if (array[mid1] === target) {
      return mid1;
    } else if (array[mid2] === target) {
      return mid2;
    } else if (target < array[mid1]) {
      return TernarySearch.doSearch(array, target, start, mid1 - 1);
    } else if (target > array[mid2]) {
      return TernarySearch.doSearch(array, target, mid2 + 1, end);
    } else {
      return TernarySearch.doSearch(array, target, mid2 + 1, mid1 - 1);
    }
  }

  private static getPartionSize(start: number, end: number): number {
    return Math.ceil((end - start) / 3);
  }
}

export default TernarySearch;
