/**
 * ? Important Note:
 * ? You should Input and Sorted Array.
 */

class BinarySearch {
  public static search(
    array: any[],
    target: any,
    start: number = 0,
    end: number = array.length - 1
  ): any {
    return BinarySearch.doSearch(array, target, start, end);
  }

  private static doSearch(
    array: any[],
    target: any,
    start: number,
    end: number
  ): any {
    // Base Case
    if (start > end) {
      return -1;
    }

    // Algo Implementation
    let middle = Math.floor((start + end) / 2);
    if (array[middle] === target) {
      return middle;
    } else if (array[middle] > target) {
      return BinarySearch.doSearch(array, target, start, middle - 1);
    } else if (array[middle] < target) {
      return BinarySearch.doSearch(array, target, middle + 1, end);
    }
  }
}

export default BinarySearch;
