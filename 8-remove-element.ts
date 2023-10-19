function removeElement(nums: number[], val: number): number {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
}

let testRm2 = removeElement([2, 3, 4, 5, 6, 7, 8, 8, 8, 8], 8);
console.log(testRm2);
