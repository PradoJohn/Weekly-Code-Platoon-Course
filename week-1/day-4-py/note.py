from functools import reduce
# reduce with functools
# Map and filter


nums  = [1,2,3,4,5]

# print(list(map(lambda x: x+ 0, nums)))

# print(list(filter(lambda x: x%4 == 0, nums)))


print(reduce(lambda agg, item : agg + item, nums))

print(reduce(lambda a, b: a if a>b else b, nums))
