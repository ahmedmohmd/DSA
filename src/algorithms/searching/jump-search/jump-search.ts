/**
 * ? Important Note:
 * ? You should Input and Sorted Array.
 */

class JumpSearch {
  public static search(array: any[], target: any) {
    let blockSize: number = JumpSearch.getBlockSize(array);
    let start = 0;
    let next = blockSize;

    while (start < array.length && array[next - 1] < target) {
      start = next;

      next += blockSize;
      if (next >= array.length) next = array.length;
    }

    for (let i = start; i < next; i++) {
      if (array[i] === target) return i;
    }

    return -1;
  }

  private static getBlockSize(array: any[]) {
    return Number.parseInt(Math.sqrt(array.length).toString());
  }
}

export default JumpSearch;
