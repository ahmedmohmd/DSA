import List from "../../../data-structres/linked-list/linked-list";
import LinkedNode from "../../../data-structres/linked-list/utils/linked-node";

class BucketSort {
  public static sort(array: number[], bucketsNumber: number): number[] {
    const buckets: List = this.createBuckets(array, bucketsNumber);

    let k: number = 0;
    let current: LinkedNode | null = buckets.head;
    while (current) {
      current.value.sort((a: number, b: number) => a - b);

      for (let number of current.value) {
        array[k] = number;
        k++;
      }

      current = current.next;
    }

    return array;
  }

  private static createBuckets(array: number[], bucketsNumber: number) {
    const buckets = new List();

    for (let i = 0; i < bucketsNumber; i++) {
      buckets.append([]);
    }

    for (let item of array) {
      buckets.at(Math.floor(item / bucketsNumber))?.value.push(item);
    }

    return buckets;
  }
}

export default BucketSort;
