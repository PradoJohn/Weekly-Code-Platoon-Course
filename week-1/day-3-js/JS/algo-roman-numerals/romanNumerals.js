const romanNumerals = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};
// O(n^2) time
// checks only for each key with single letter
function toRomanLazy(num) {
  let result = ''
  for (const key in romanNumerals) {
    if (key.length == 1){
      while (num >= romanNumerals[key]) {
        result += key;
        num -= romanNumerals[key];
      }
    }
  }
  
  return result;
}
// O(n^2) time
// all keys used
function toRoman(num) {
  let result = '';
  for (const key in romanNumerals) {
    while (num >= romanNumerals[key]) {
      result += key;
      num -= romanNumerals[key];
    }
  }

  return result;
}
console.log(toRomanLazy(3999))
console.log(toRoman(3999))
module.exports = { toRoman, toRomanLazy };
