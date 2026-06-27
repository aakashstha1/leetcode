class Solution:
    def isValid(self, s: str) -> bool:
        d={
            "]":"[",
        "}":"{",
        ")":"("
        }
        st=[]
        for ch in s:
            if ch in "[{(":
                st.append(ch)
            else:
                if not st or st[-1]!=d[ch]:
                    return False
                
                st.pop()
        return len(st)==0

obj =Solution()
print(obj.isValid("[{}]"))
        