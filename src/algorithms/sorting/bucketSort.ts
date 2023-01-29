import List from "../../data-structres/linkedlist/linkedList";
import LinkedNode from "../../data-structres/linkedlist/LinkedNode";

class BucketSort {
  public sort(array: number[], bucketsNumber: number): number[] {
    const buckets: List = this.createBuckets(array, bucketsNumber);

    let k: number = 0;
    let current: LinkedNode = buckets.head;
    while (current) {
      current.value.sort((a, b) => a - b);

      for (let number of current.value) {
        array[k] = number;
        k++;
      }

      current = current.next;
    }

    return array;
  }

  private createBuckets(array, bucketsNumber) {
    const buckets = new List();

    for (let i = 0; i < bucketsNumber; i++) {
      buckets.append([]);
    }

    for (let item of array) {
      buckets.at(Math.floor(item / bucketsNumber)).value.push(item);
    }

    return buckets;
  }
}

export default BucketSort;
