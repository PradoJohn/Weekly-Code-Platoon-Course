# Roman Numerals

## Step 0: Pseudocode

We always want to encourage you to pseudocode your "gameplan" for any challenge before actually writing code. Note that we won't mention writing psuedocode all the time, but it's good practice to implement (especially for new coders) when tackling challenges. Here's an example of how one might pseudocode for this challenge (again, don't expect us to do this for you for all challenges!). Note that CAPITALIZED items in the pseucode are meant to be placeholders for items to implement, not actual style of methods/variables).

```Python
# 1. Write a method TO_ROMAN, TO_ROMAN takes in INPUT_NUMBER (an arabic number)
# 2. Create a OUTPUT string, set to ''
# 3. Create a ROMAN_NUMERAL_TO_ARABIC_MAP that includes roman numerals as keys, arabic numbers as values
# 4. Iterate over ROMAN_NUMERAL_TO_ARABIC_MAP, keep track of ROMAN_NUMERAL and ARABIC_NUMBER
# 5. Set EVENLY_DIVISIBLE_TIMES = INPUT_NUMBER / ARABIC_NUMBER:
# 6. If EVENLY_DIVISIBLE_TIMES >= 1
  # 6a. Append ROMAN_NUMERAL to OUTPUT EVENLY_DIVISIBLE_TIMES
  # 6b. Subtract ARABIC_NUMBER from INPUT_NUMBER EVENLY_DIVISIBLE_TIMES
# 7. Return OUTPUT
```

## Step 1: Lazy Roman Numerals

Given a number in today's numbers, (Arabic Numeral), return its equivalent in Roman Numerals in the lazy way. Lazy Roman Numerals is where Roman Numerals are added together (9 is `VIIII`, 4 is `IIII`). Here are Roman Numerals with their Arabic Numeral counterparts:

```bash
I -> 1
V -> 5
X -> 10
L -> 50
C -> 100
D -> 500
M -> 1000
```

## Step 2: Modern Roman Numerals

If a smaller number appears before a larger number, you must subtract the smaller one. Here's a list for you:

```bash
IV -> 4
IX -> 9
XIV -> 14
XLIV -> 44
CMXLIV -> 944
```

## Running the test suite

This exercise contains a pytest test suite to help you exercise your Test Driven Development skills. To run the test suite, please follow these steps:

- Install pytest

  ```bash
    # terminal command
    pip install pytest
  ```

- Run the test suite

  ```bash
    # terminal command
    pytest test_roman_numerals.py
  ```

### Sample output

```python
to_roman(4) # 'IV'
to_roman(944) # 'CMXLIV'
to_roman(150) # CL
```

### Hint: Consider the data structure(s) that can be used to store numerical values, and how it can relate to string representations. Break the problem down... how many combinations are there really to consider?

#### DO NOT concern yourself with very large numbers. Your algorithm should keep appending 'M' for each thousand. (Numbers over 3000 have different numerical representations)
