
/*

In this example, we will write an algorithm that takes two sentences, one correct sentence and one incorrect sentence. Then we return the sentence that the incorrect words are strikethrough depend on the positions.
1. We convert the sentences into a matrix of words with the position of each word in the sentence.
2. We compare the two sentences and return the incorrect words with the strikethrough style.
Example: 



correct: She no went to the market.
inCorrect: She didn't go to the market.
[['she', 1, 'no-strikethrough'], ['no', 2, 'strikethrough'], ['went', 3, 'strikethrough'], ['to', 4, 'no-strikethrough'], ['the', 5, 'no-strikethrough'], ['market', 6, 'no-strikethrough']]
[['she', 1, 'no-strikethrough'], ['didn\'t', 2, 'no-strikethrough'], ['go', 3, 'no-strikethrough'], ['to', 4, 'no-strikethrough'], ['the', 5, 'no-strikethrough'], ['market', 6, 'no-strikethrough']]
*/
const correct = 'She no went to the market.';
const inCorrect = 'She didn\'t go to the market.';

const correctSentence = correct.split(' ');
const inCorrectSentence = inCorrect.split(' ');

const correctSentenceMatrix = correctSentence.map((word, index) => {
    return [word, index + 1, 'no-strikethrough'];
});

const inCorrectSentenceMatrix = inCorrectSentence.map((word, index) => {
    return [word, index + 1, 'no-strikethrough'];
});

const compareSentences = (correctSentence, inCorrectSentence) => {
    for (let i = 0; i < correctSentence.length; i++) {
        if (correctSentence[i][0] !== inCorrectSentence[i][0]) {
            correctSentence[i][2] = 'strikethrough';
            inCorrectSentence[i][2] = 'strikethrough';
        }
    }
    return [correctSentence, inCorrectSentence];
};

console.log(compareSentences(correctSentenceMatrix, inCorrectSentenceMatrix));








function compareSentence(correct, incorrect) {
    let correctArray = correct.split(' ');
    let incorrectArray = incorrect.split(' ');
    let result = [];
    for (let i = 0; i < correctArray.length; i++) {
        if (correctArray[i] === incorrectArray[i]) {
            result.push([correctArray[i], i + 1, 'no-strikethrough']);
        } else {
            result.push([correctArray[i], i + 1, 'strikethrough']);
        }
    }
    return result;
}

console.log(compareSentence("She no went to the market.", "She didn't go to the market."));






/**
def compareSentences(correct, incorrect):
    correct = correct.split(' ')
    incorrect = incorrect.split(' ')
    correct_sentence = []
    incorrect_sentence = []
    for i in range(len(correct)):
        correct_sentence.append([correct[i], i+1, 'no-strikethrough'])
    for i in range(len(incorrect)):
        incorrect_sentence.append([incorrect[i], i+1, 'no-strikethrough'])
    for i in range(len(correct_sentence)):
        if correct_sentence[i][0] != incorrect_sentence[i][0]:
            incorrect_sentence[i][2] = 'strikethrough'
    return incorrect_sentence

print(compareSentences('She no went to the market.', 'She didn\'t go to the market.'))



def convertSentenceToMatrix(sentence):
    words = sentence.split(' ')
    matrix = []
    for i in range(len(words)):
        matrix.append([words[i], i+1, 'no-strikethrough'])
    return matrix

def compareSentences(correct, incorrect):
    correctMatrix = convertSentenceToMatrix(correct)
    incorrectMatrix = convertSentenceToMatrix(incorrect)
    for i in range(len(correctMatrix)):
        if correctMatrix[i][0] != incorrectMatrix[i][0]:
            correctMatrix[i][2] = 'strikethrough'
    return correctMatrix

correct = 'She no went to the market.'
incorrect = 'She didn\'t go to the market.'
print(compareSentences(correct, incorrect))

 */