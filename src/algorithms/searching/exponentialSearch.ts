import BinarySearch from "./binarySearch";

class ExponentialSearch {
  public search(array: number[], target: number): number {
    let bound: number = 1;

    while (bound < array.length && array.at(bound) < target) {
      bound *= 2;
    }

    return this.doSearch(array, bound, target);
  }

  private doSearch(array: number[], bound: number, target: number): number {
    let start: number = Math.floor(bound / 2);
    let end: number = Math.min(bound, array.length - 1);

    const binarySearch = new BinarySearch();

    return binarySearch.search(array, target, start, end);
  }
}

export default ExponentialSearch;
