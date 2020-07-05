
# Regular Expressions
## Positive Lookahead:
The positive lookahead asserts that the fist part of the expression must be followed by the lookahead expression.
(T|t)he(?=\sfat) Match <em>The</em> or <em>the</em> only if it's followed by the word <em>fat</em>.

## Negative Lookahead:
Get all the matches that are not followed by a certain pattern. (T|t)he(?!\sfat) which means get all <em>The</em> or <em>the</em> words from the input string that are not followed by a space character and the word <em>fat</em>.