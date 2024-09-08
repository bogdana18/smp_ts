function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
      if (arr[j] < pivot) {
          i++;
          swap(arr, i, j);
      }
  }
  swap(arr, i + 1, high);
  return i + 1;
}

function quickSort(arr, low, high) {
  if (low < high) {
      let pi = partition(arr, low, high);

      quickSort(arr, low, pi - 1);
      quickSort(arr, pi + 1, high);
  }
}

function sortArray(arr) {
  quickSort(arr, 0, arr.length - 1);
}

function generateRandomArray(size) {
  let arr = [];
  for (let i = 0; i < size; i++) {
      arr.push(Math.floor(Math.random() * 100));
  }
  return arr;
}

function printArray(arr) {
  console.log(arr.join(', '));
}

function main() {
  const size = 10;
  let arr = generateRandomArray(size);

  console.log("Оригінальний масив:");
  printArray(arr);

  sortArray(arr);

  console.log("Відсортований масив:");
  printArray(arr);
}

main();

function repeatSort() {
  const newSize = 20;
  let newArr = generateRandomArray(newSize);

  console.log("\nНовий оригінальний масив:");
  printArray(newArr);

  sortArray(newArr);

  console.log("Новий відсортований масив:");
  printArray(newArr);
}

repeatSort();

function sortLargeArray() {
  const largeSize = 50; 
  let largeArr = generateRandomArray(largeSize);

  console.log("\nОригінальний великий масив:");
  printArray(largeArr);

  sortArray(largeArr);

  console.log("Відсортований великий масив:");
  printArray(largeArr);
}

sortLargeArray();

function isArraySorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
          return false;
      }
  }
  return true;
}

function testIsArraySorted() {
  let testArr1 = [1, 2, 3, 4, 5];
  let testArr2 = [5, 4, 3, 2, 1];

  console.log("\nПеревірка відсортованого масиву:");
  console.log(isArraySorted(testArr1) ? "Масив відсортований" : "Масив не відсортований");

  console.log("Перевірка невідсортованого масиву:");
  console.log(isArraySorted(testArr2) ? "Масив відсортований" : "Масив не відсортований");
}

testIsArraySorted();

function generateAlmostSortedArray(size) {
  let arr = [];
  for (let i = 0; i < size; i++) {
      arr.push(i);
  }
  arr[size - 1] = size - 3;
  return arr;
}

function testAlmostSortedArray() {
  const size = 15;
  let arr = generateAlmostSortedArray(size);

  console.log("\nМайже відсортований масив:");
  printArray(arr);

  sortArray(arr);

  console.log("Відсортований майже відсортований масив:");
  printArray(arr);
}

testAlmostSortedArray();
