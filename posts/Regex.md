---

title: "Regular Expressions"
author: 'Inder'
date: "05-07-20"
---


## Positive Lookahead:
The positive lookahead asserts that the fist part of the expression must be followed by the lookahead expression.
(T|t)he(?=\sfat) Match The or the only if it's followed by the word <em>fat</em>.

## Negative Lookahead:
Get all the matches that are not followed by a certain pattern. (T|t)he(?!\sfat) which means get all The or the words from the input string that are not followed by a space character and the word fat.

## Positive Lookbehind
Used to get all the matches that are preceded by a specific pattern. (?<=(T|t)he\s)(fat|mat) means: get all fat or mat words from the input string that come after the word The or the.

## Negative Lookbehind
Used to get all the matches that are not preceded by a specific pattern. (?<!(T|t)he\s)(cat) means: get all cat words from the input string that are not after the word The or the.
