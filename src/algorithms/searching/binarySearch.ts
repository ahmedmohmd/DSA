/**
 * ? Important Note:
 * ? You should Input and Sorted Array.
 */

class BinarySearch {
  public search(array: any[], target: any, start?: number, end?: number): any {
    return this.doSearch(array, target, start || 0, end || array.length - 1);
  }

  private doSearch(array: any[], target: any, start: number, end: number): any {
    // Base Case
    if (start > end) {
      return -1;
    }

    // Algo Implementation
    let middle = Math.floor((start + end) / 2);
    if (array[middle] === target) {
      return middle;
    } else if (array[middle] > target) {
      return this.doSearch(array, target, start, middle - 1);
    } else if (array[middle] < target) {
      return this.doSearch(array, target, middle + 1, end);
    }
  }
}

export default BinarySearch;
