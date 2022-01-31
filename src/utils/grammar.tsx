// const correct = "She no went to the market"
// const incorrect = "She didn't go to the market but did she"

// const correctArray = correct.split(" ")
// const incorrectArray = incorrect.split(" ")

// function compare(correctArray, incorrectArray) {
//     for (let i = 0; i < correctArray.length; i++) {
//         for (let j = 0; j < incorrectArray.length; j++) {
//             if (correctArray[i] === incorrectArray[j]) {
//                 console.log(correctArray[i])
//             }
//         }
//     }
// }

// compare(correctArray, incorrectArray)

/*
1. Iterate through the correctArray and incorrectArray
2. If the values are the same, add them to the sharedValues array
3. If the values are different, add them to the diffValuesRight and diffValuesLeft arrays
4. Return the sharedValues array, diffValuesRight array, and diffValuesLeft array in an object form
*/

export function findSharedSequence(correct: string, incorrect: string) {
  let correctArray: string[] = correct.split(" ");
  let incorrectArray: string[] = incorrect.split(" ");
  let sharedValues = [];
  let diffValuesRight = [];
  let diffValuesLeft = [];
  for (let i = 0; i < correctArray.length; i++) {
    if (correctArray[i] === incorrectArray[i]) {
      sharedValues.push(correctArray[i]);
    } else {
      diffValuesRight.push(correctArray[i]);
      diffValuesLeft.push(incorrectArray[i]);
    }
  }
  return { sharedValues, diffValuesRight, diffValuesLeft };
}
