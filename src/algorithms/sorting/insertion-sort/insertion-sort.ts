/*
! Old Implementation

  static sort(array: number[]): number[] {
    for (let i = 1; i < array.length; i++) {
      if (array[0] > array[i]) {
        array.unshift(array.splice(i, 1)[0]);
      } else {
        for (let j = 1; j < i; j++) {
          if (array[i] > array[j - 1] && array[i] < array[j]) {
            array.splice(j, 0, array.splice(i, 1)[0]);
          }
        }
      }
    }

    return array;
  }
 */

class InsertionSort {
  static sort(array: number[]): number[] {
    for (let i = 0; i < array.length; i++) {
      let current = array[i];

      let j = i - 1;
      while (j >= 0 && array[j] > current) {
        array[j + 1] = array[j];
        j--;
      }

      array[j + 1] = current;
    }

    return array;
  }
}

export default InsertionSort;
