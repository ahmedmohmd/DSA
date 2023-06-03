import BinarySearch from "../binary-search/binary-search";

/**
 * ? Important Note:
 * ? You should Input and Sorted Array.
 */

class ExponentialSearch {
  public static search(array: number[], target: number): number {
    let bound: number = 1;

    while (bound < array.length && array[bound] < target) {
      bound *= 2;
    }

    return this.doSearch(array, bound, target);
  }

  private static doSearch(
    array: number[],
    bound: number,
    target: number
  ): number {
    let start: number = Math.floor(bound / 2);
    let end: number = Math.min(bound, array.length - 1);

    return BinarySearch.search(array, target, start, end);
  }
}

export default ExponentialSearch;
