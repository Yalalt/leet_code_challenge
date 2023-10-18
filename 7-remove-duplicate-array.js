function removeDuplicates(nums) {
    if (nums.length === 0) {
        return 0;
    }
    var i = 0;
    for (var j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }
    console.log("Nums: ", nums);
    var numsLengths = nums.length;

    var newNumber = nums.slice(0, i+1);
    
    console.log(typeof newNumber);
    
    const myArr = [...newNumber];
    for (var k = 0; k < numsLengths; k++) {
        if (k > i + 1) {
            myArr.push("_");
        }
    }
    console.log(myArr);
    return i + 1;
}
;
var testNums = [1, 2, 2, 3, 4, 5, 5];
var expectedNums = [1, 2, 3, 4, 5];

console.log(removeDuplicates(testNums));
