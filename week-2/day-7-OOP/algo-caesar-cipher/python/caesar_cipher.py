def caesar_cipher(string, shift_amount):
    result = []
    for letter in string:
        if not letter.isalpha():
            result.append(letter)
        elif letter.islower():
            result.append(lowerCase(letter, shift_amount % 26))
        elif letter.isupper():
            result.append(upperCase(letter, shift_amount % 26))

    return "".join(result)


def lowerCase(letter, key):
    newLetterCode = ord(letter) + key
    return chr(newLetterCode) if newLetterCode <= 122 else chr(96 + newLetterCode % 122)

def upperCase(letter, key):
    newLetterCode = ord(letter) + key
    return chr(newLetterCode) if newLetterCode <= 90 else chr(64 + newLetterCode % 90)

if __name__ == "__main__":
    print(caesar_cipher("Boy! What a string!", -5)) # "Wjt! Rcvo v nomdib!"