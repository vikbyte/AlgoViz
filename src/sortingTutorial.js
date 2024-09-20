const sortData = [
  {
    title: "Bubble Sort",
    list: [
      "Bubble Sort is a simple sorting algorithm that compares adjacent elements.",
      "If the elements are not in the correct order, they are swapped to move the larger element up the list.",
    ],
  },
  {
    title: "Merge Sort",
    list: [
      "Merge Sort uses a divide-and-conquer approach to sort elements.",
      "It splits the list into two halves, recursively sorts each half, and then merges the sorted halves.",
      "The process continues until the list is divided into single elements.",
      "These individual elements are then merged into sorted pairs, and the pairs are combined into larger sorted sublists.",
      "This continues until the entire list is merged back into one sorted array.",
    ],
  },
  {
    title: "Insertion Sort",
    list: [
      "Insertion Sort is similar to sorting playing cards in your hand.",
      "The array is divided into a sorted and an unsorted part.",
      "Elements from the unsorted part are picked and inserted into their correct position in the sorted part.",
    ],
  },
  {
    title: "Quick Sort",
    list: [
      "Quick Sort is a divide-and-conquer algorithm that selects a pivot element to partition the array.",
      "The array is partitioned such that elements smaller than the pivot are moved to its left, and elements greater than the pivot are moved to its right.",
      "This process is repeated recursively for the subarrays on either side of the pivot until the entire array is sorted.",
    ],
  },
];

export default sortData;
