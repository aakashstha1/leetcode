class Solution:
    def reverse(self, x: int) -> int:
        sign= -1 if x<0 else 1

        res= int(str(abs(x))[::-1])*sign

        if res not in range(-(2**31),(2**31)-1):
            return 0
        else:
            return res


sol=Solution()
print(sol.reverse(-2147483648))
        