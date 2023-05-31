class LinearSearch {
  public static search(array: any[], target: any): any {
    for (let i: number = 0; i < array.length; i++) {
      if (array[i] === target) return i;
    }

    return -1;
  }
}

export default LinearSearch;
