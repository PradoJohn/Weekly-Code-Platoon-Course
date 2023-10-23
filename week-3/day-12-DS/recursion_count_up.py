

# def count_up(n):
    
#     if n ==0:
#         print(n)
#         return 0
    
#     result = 1 + count_up(n-1)
#     print(result)
#     return result

def count_p(num):

    if num == 0:
        print(0)
    else:
        count_p(num-1)
    
    print(num)
    return 'End'
print(count_p(10))