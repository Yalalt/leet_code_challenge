function removeDuplicates(nums: number[]): number {

    if (nums.length === 0) {
        return 0;
    }

    let i: number = 0;

    for (let j: number = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }

    console.log("Nums: ", nums);
    const numsLengths: number = nums.length;
    let newNumber = nums.slice(0, numsLengths);
    console.log(typeof newNumber);
    
    for (let k = 0; k < numsLengths; k++) {

    }
    console.log(newNumber);


    return i + 1;
};
const testNums: number[] = [1,2,2,3,4,5,5];
const expectedNums: number[] = [1,2,3,4,5];

console.log(removeDuplicates(testNums));