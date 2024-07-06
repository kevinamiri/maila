type ComparisonResult = {
  shared: string[];
  diffRight: string[];
  diffLeft: string[];
};

/**
 * Compares two sentences and finds shared and different words.
 * @param correct - The correct sentence
 * @param incorrect - The sentence to compare
 * @returns Object with shared and different words
 * @example
 * const result = compareStrings("She went to the market", "She go to the store");
 * console.log(result);
 * // { shared: ["She", "to", "the"], diffRight: ["went", "market"], diffLeft: ["go", "store"] }
 */
export const compareStrings = (correct: string, incorrect: string): ComparisonResult => {
  try {
    const correctWords = correct.split(" ");
    const incorrectWords = incorrect.split(" ");
    const maxLength = Math.max(correctWords.length, incorrectWords.length);

    console.log(`📊 Comparing ${correctWords.length} vs ${incorrectWords.length} words`);

    const result: ComparisonResult = { shared: [], diffRight: [], diffLeft: [] };

    for (let i = 0; i < maxLength; i++) {
      if (correctWords[i] === incorrectWords[i]) {
        result.shared.push(correctWords[i]);
      } else {
        if (correctWords[i]) result.diffRight.push(correctWords[i]);
        if (incorrectWords[i]) result.diffLeft.push(incorrectWords[i]);
      }
    }

    console.log(`✅ Comparison complete: ${result.shared.length} shared words found`);
    return result;
  } catch (error) {
    console.error(`❌ Error comparing strings: ${error.message}`);
    throw error;
  }
};

// Uncomment to test the function
// const testCorrect = "She no went to the market";
// const testIncorrect = "She didn't go to the market but did she";
// console.log(compareStrings(testCorrect, testIncorrect));