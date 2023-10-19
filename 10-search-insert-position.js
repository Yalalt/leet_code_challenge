function searchInsert(nums, target) {
    var left = 0;
    var right = nums.length - 1;
    while (left <= right) {
        var midPos = Math.floor((left + right) / 2);
        if (nums[midPos] === target) {
            return midPos;
        }
        else if (nums[midPos] < target) {
            left += 1;
        }
        else {
            right -= 1;
        }
    }
    return left;
}
/**
 * initial: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 9
 * L0,1,2,3,4,5,6,M7,8,9,10,11,12,13,R14
* 14
* 0,L1,2,3,4,5,6,M7,8,9,10,11,12,13,R14
* 15
* 0,1,L2,3,4,5,6,7,M8,9,10,11,12,13,R14
* 16
* ok
**/
