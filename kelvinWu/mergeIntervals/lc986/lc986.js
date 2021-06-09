// Problem Statement #

// Given two lists of intervals, find the intersection of these two lists. Each list consists of disjoint intervals sorted on their start time.

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}

const overlap = function (a, b) {
  if (a.start >= b.start && a.start <= b.end) return true;
  else if (b.start >= a.start && b.start <= a.end) return true;
  return false;
};
const merge = function (intervals_a, intervals_b) {
  if (intervals_a.length === 0 || intervals_b.length === 0) return [];
  let result = [];
  //if one or both lists are empty, return empty array
  //have two pointers point to start of both arrays
  ////if they intersect, add intersection
  ////move pointer that has shorter end time
  let i = 0;
  j = 0;
  while (i < intervals_a.length && j < intervals_b.length) {
    let interval1 = intervals_a[i];
    let interval2 = intervals_b[j];
    if (overlap(interval1, interval2)) {
      result.push(
        new Interval(
          Math.max(interval1.start, interval2.start),
          Math.min(interval1.end, interval2.end)
        )
      );
    }
    if (interval2.end > interval1.end) i++;
    else j++;
  }
  return result;
};

// function merge(intervals_a, intervals_b) {
//   let result = [],
//     i = 0,
//     j = 0;

//   while (i < intervals_a.length && j < intervals_b.length) {
//     // check if intervals overlap and intervals_a[i]'s start time lies within the other intervals_b[j]
//     a_overlaps_b =
//       intervals_a[i].start >= intervals_b[j].start &&
//       intervals_a[i].start <= intervals_b[j].end;

//     // check if intervals overlap and intervals_a[j]'s start time lies within the other intervals_b[i]
//     b_overlaps_a =
//       intervals_b[j].start >= intervals_a[i].start &&
//       intervals_b[j].start <= intervals_a[i].end;

//     // store the the intersection part
//     if (a_overlaps_b || b_overlaps_a) {
//       result.push(
//         new Interval(
//           Math.max(intervals_a[i].start, intervals_b[j].start),
//           Math.min(intervals_a[i].end, intervals_b[j].end)
//         )
//       );
//     }
//     // move next from the interval which is finishing first
//     if (intervals_a[i].end < intervals_b[j].end) {
//       i += 1;
//     } else {
//       j += 1;
//     }
//   }

//   return result;
// }

process.stdout.write("Intervals Intersection: ");
let result = merge(
  [new Interval(1, 3), new Interval(5, 6), new Interval(7, 9)],
  [new Interval(2, 3), new Interval(5, 7)]
);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

process.stdout.write("Intervals Intersection: ");
result = merge(
  [new Interval(1, 3), new Interval(5, 7), new Interval(9, 12)],
  [new Interval(5, 10)]
);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

// Solution
// -----
// function merge(intervals_a, intervals_b) {
//   let result = [],
//     i = 0,
//     j = 0;

//   while (i < intervals_a.length && j < intervals_b.length) {
//     // check if intervals overlap and intervals_a[i]'s start time lies within the other intervals_b[j]
//     a_overlaps_b = intervals_a[i].start >= intervals_b[j].start && intervals_a[i].start <= intervals_b[j].end;

//     // check if intervals overlap and intervals_a[j]'s start time lies within the other intervals_b[i]
//     b_overlaps_a = intervals_b[j].start >= intervals_a[i].start && intervals_b[j].start <= intervals_a[i].end;

//     // store the the intersection part
//     if (a_overlaps_b || b_overlaps_a) {
//       result.push(new Interval(Math.max(intervals_a[i].start, intervals_b[j].start),
//         Math.min(intervals_a[i].end, intervals_b[j].end)));
//     }
//     // move next from the interval which is finishing first
//     if (intervals_a[i].end < intervals_b[j].end) {
//       i += 1;
//     } else {
//       j += 1;
//     }
//   }

//   return result;
// }

// -----

// Time complexity #
// As we are iterating through both the lists once, the time complexity of the above algorithm is O(N + M), where ‘N’ and ‘M’ are the total number of intervals in the input arrays respectively.

// Space complexity #
// Ignoring the space needed for the result list, the algorithm runs in constant space O(1).