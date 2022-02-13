/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

var helper = function (arr, k) {
  const result = []
  const n = arr.length
  if (k > 0) {
    for (let i = 0; i < n; i++) {
      const left = arr[i]
      if (k === 1) {
        result.push([left])
      } else {
        const rest = arr.slice(i + 1, n)
        let temp = helper(rest, k - 1)
        temp.forEach(arr1 => {
          arr1.unshift(left)
          result.push(arr1)
        })
      }
    }
  }
  return result
};

const combine = function (n, k) {
  const arr = Array.from({ length: n }, (v, k) => k + 1);
  return helper(arr, k)
}

console.log(combine(4, 2))