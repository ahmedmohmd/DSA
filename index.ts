import BinarySearch from "./src/algorithms/searching/binary-search/binary-search";
const binarySearch = (array: number[], target: number) => {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (array[middle] === target) {
      return middle;
    } else if (array[middle] > target) {
      end = middle - 1;
    } else if (array[middle] < target) {
      start = middle + 1;
    }
  }

  return -1;
};

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binarySearch(array, 4));
// console.log(BinarySearch.search(array, 4));
