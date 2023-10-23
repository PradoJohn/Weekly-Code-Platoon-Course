def findStart(nums,target,left,right):
            if left > right:
                return -1
            mid = (left + right)//2
            if nums[mid] == target:
                start = findStart(nums, target, left, mid-1) # check left if occurs
                return start if start != -1 else mid
            elif nums[mid] < target:
                return findStart(nums,target, mid +1, right)
            else:
                return findStart(nums,target,left, mid-1)
    
def findEnd(nums,target,left,right):
    if left > right:
        return -1
    mid = (left + right)//2
    if nums[mid] == target:
        end = findEnd(nums, target, mid+1, right) # check right if occurs
        return end if end != -1 else mid
    elif nums[mid] < target:
        return findEnd(nums,target, mid +1, right)
    else:
        return findEnd(nums,target,left, mid-1)
        
left = findStart([1,2,3,3,4,5],3, 0, len([1,2,3,4,5])-1)
right = findEnd([1,2,3,3,4,5],3, 0, len([1,2,3,4,5])-1)

print([left,right])