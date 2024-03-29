// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
  if (A.length === 1) {
    return Math.max(A[0], B[0]);
  }

  const maxValueAFromLeft = new Array(Int32Array);
  const maxValueBFromRight = new Array(Int32Array);
  const lastIndex = A.length - 1;
  for (let i = 0; i <= lastIndex; i++) {
    maxValueAFromLeft = Math.max(
      A[i],
      i > 0 ? maxValueAFromLeft[i - 1] : Number.NEGATIVE_INFINITY
    );
    maxValueBFromRight = Math.max(
      B[lastIndex - i],
      i < lastIndex
        ? maxValueBFromRight[lastIndex - i + 1]
        : Number.NEGATIVE_INFINITY
    );
  }

  let lowestValue = Number.POSITIVE_INFINITY;
  for (let i = 0; i <= lastIndex; i++) {
    lowestValue = Math.min(
      Math.max(maxValueAFromLeft[i], maxValueBFromRight[i]),
      lowestValue
    );
  }
}
