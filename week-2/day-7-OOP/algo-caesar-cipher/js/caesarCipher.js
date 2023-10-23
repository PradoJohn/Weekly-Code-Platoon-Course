exports.caesarCipher = function (string, shift_key) {
    let result = [];
    let key = shift_key % 26;

    for (const char of string) {
        if (!/[a-zA-Z]/.test(char)) {
            // If the character is not an alphabet character, add it as is.
            result.push(char);
        } else if (/[a-z]/.test(char)) {
            // If it's a lowercase alphabet character, apply the cipher.
            result.push(lowerCase(char, key));
        } else if (/[A-Z]/.test(char)) {
            // If it's an uppercase alphabet character, apply the cipher.
            result.push(upperCase(char, key));
        }
    }
    return result.join(''); // Join the result array into a string.
};

const lowerCase = (letter, key) => {
    let newKey = letter.charCodeAt(0) + key;
    return newKey <= 122 ? String.fromCharCode(newKey) : String.fromCharCode(96 + (newKey % 122));
};

const upperCase = (letter, key) => {
    let newKey = letter.charCodeAt(0) + key;
    return newKey <= 90 ? String.fromCharCode(newKey) : String.fromCharCode(64 + (newKey % 90));
};

// Example usage:
const text = "Boy! What a string!";
const shift = 3;
const encryptedText = exports.caesarCipher(text, shift);
console.log(encryptedText); // Output: "Khoor, Zruog!"
