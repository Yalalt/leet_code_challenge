let twoSum = function(nums, target) {

    const numberMap = {};
    for(let i = 0; i < nums.length; i++) {
        let truePair = target - nums[i];
        if(numberMap[truePair] !== undefined) {
            return [numberMap[truePair], i];
        } else {
            numberMap[nums[i]] = i;
        }
    }
};