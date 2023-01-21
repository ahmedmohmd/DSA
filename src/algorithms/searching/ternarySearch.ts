/**
 * ? Important Note:
 * ? You should Input and Sorted Array.
 */

class TernarySearch {
  public search(array: any[], target: any) {
    return this.doSearch(array, target, 0, array.length - 1);
  }

  private doSearch(array: any[], target: any, start: number, end: number): any {
    // Base Case
    if (start > end) {
      return -1;
    }

    // Algo Implementation
    let partitionSize: number = this.getPartionSize(start, end);
    let mid1: number = start + partitionSize;
    let mid2: number = end - partitionSize;

    if (array.at(mid1) === target) {
      return mid1;
    } else if (array.at(mid2) === target) {
      return mid2;
    } else if (target < array.at(mid1)) {
      return this.doSearch(array, target, start, mid1 - 1);
    } else if (target > array.at(mid2)) {
      return this.doSearch(array, target, mid2 + 1, end);
    } else {
      return this.doSearch(array, target, mid2 + 1, mid1 - 1);
    }
  }

  private getPartionSize(start: number, end: number): number {
    return Math.ceil((end - start) / 3);
  }
}

export default TernarySearch;
