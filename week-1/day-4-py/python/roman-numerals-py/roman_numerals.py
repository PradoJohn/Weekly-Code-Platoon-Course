# romanNumerals = {
#   'M': 1000,
#   'CM': 900,
#   'D': 500,
#   'CD': 400,
#   'C': 100,
#   'XC': 90,
#   'L': 50,
#   'XL': 40,
#   'X': 10,
#   'IX': 9,
#   'V': 5,
#   'IV': 4,
#   'I': 1,
# }
# # O(n^2) time | O(n) space
# # def to_roman(num):
# #     result = ""
# #     for key in romanNumerals.keys():
# #         while num >= romanNumerals[key]:
# #             result += key
# #             num -= romanNumerals[key]
# #     return result

# # O(n^2) time | O(n) space
# def to_roman_lazy(num):
#     result = ""
#     for key in romanNumerals.keys():
#         if len(key) == 1:
#             while num >= romanNumerals[key]:
#                 result += key
#                 num -= romanNumerals[key]
#     return result

# # Recursive function using modern Roman Numberals
# def to_roman(num):
#     if num < 0 or num >= 3999:
#         return 'Invalid number'
#     elif num == 0:
#         return ''
    
#     for key in romanNumerals.keys():
#         if num >= romanNumerals[key]:
#             return key + to_roman(num-romanNumerals[key])

def toRoman(num):
            dict = {
            'M': 1000,
            'CM': 900,
            'D': 500,
            'CD': 400,
            'C': 100,
            'XC': 90,
            'L': 50,
            'XL': 40,
            'X': 10,
            'IX': 9,
            'V': 5,
            'IV': 4,
            'I': 1,
        }
            if num == 0:
                return ''
            for key in dict.keys():
                if num >= dict[key]:
                    return key + toRoman(num - dict[key])
                
print(toRoman(58))