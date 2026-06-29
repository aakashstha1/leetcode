class Solution:
    def minimumSumSubarray(self, nums: List[int], l: int, r: int) -> int:
        min_sum=float(inf)
        for size in range(l,r+1):
            for i in range(len(nums)-size+1):
                sub_array=nums[i:i+size]
                curr_sum=sum(sub_array)
                if curr_sum > 0:
                    min_sum=min(min_sum,curr_sum)
        
        return min_sum if min_sum != float('inf') else -1

obj = Solution()
print(obj.minimumSumSubarray([3,-2,1,4],2,3))
