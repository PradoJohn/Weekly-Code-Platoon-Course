# Caesar Cipher Challenge

A Caesar cipher is a form of cryptography where each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence.


# Challenge

Implement a caesar cipher that takes in a string and the shift factor and then outputs the modified string:

    > caesar_cipher("What a string!", 5)
    => "Bmfy f xywnsl!"

# Considerations

* You will need to remember how to convert a string into a number.
* Don't forget to wrap from z to a.
* Don't forget to keep the same case.
