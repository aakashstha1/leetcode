class Solution:
    def isPalindrome(self, x: int) -> bool:
        inList=list(str(x))
        reversed = inList[::-1]
        if inList == reversed:
            return True
        else:
            return False

sol= Solution()
digit= 12321
print(sol.isPalindrome(digit))
        
        