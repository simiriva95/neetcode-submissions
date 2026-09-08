class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
       const mappa = new Map()
       for(let i=0; i< nums.length; i++) {
        const diff = target - nums[i];
        if(mappa.has(diff)){
            return [mappa.get(diff), i];
        }
        mappa.set(nums[i],i)
       }
       return []
    }
}
