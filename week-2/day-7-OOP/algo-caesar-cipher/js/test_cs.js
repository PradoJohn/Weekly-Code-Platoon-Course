// Rewrite this in Unit Test

var cs = require("./caesarCipher");

test("Caesar Cipher with negative shift", () => {
  const result = caesarCipher("Boy! What a string!", -5);
  expect(result).toBe("Wjt! Rcvo v nomdib");
});

test("Caesar Cipher with positive shift", () => {
  const result = caesarCipher("Hello zach168! Yes here.", 5);
  expect(result).toBe("Mjqqt efhm168! Djx mjwj");
});

test("Caesar Cipher with negative shift and mixed case", () => {
  const result = caesarCipher("Hello Zach168! Yes here.", -5);
  expect(result).toBe("Czggj Uvxc168! Tzn czmz");
});
