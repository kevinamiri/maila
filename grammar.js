
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
const correct = 'I was very angry. Somehow they always made me angry. I know they are supposed to be amusing, and you should be tolerant, but I wanted to swing on one, any one, anything to shatter that superior, simpering composure. Instead, I walked down the street and had a beer at the bar at the next Bal. The beer was not good and I had a worse cognac to take the taste out of my mouth. When I came back to the Bal there was a crowd on the floor and Georgette was dancing with the tall blond youth, who danced big-hippily, carrying his head on one side, his eyes lifted as he danced. As soon as the music stopped another one of them asked her to dance. She had been taken up by them. I knew then that they would all dance with her. They are like that.';
const inCorrect ="I was so annoyed with them, as usual. I know I should be more tolerant since they're meant to entertain, but I felt like lashing out at one of them to break through that smug composure. Instead, I went to a nearby bar for a beer to cool off. The beer wasn't good so I had some bad cognac too, just to get the taste out. When I returned, a crowd had formed as Georgette danced with one of those tall blond guys, dancing pretentiously with his head tilted as if he didn't have a care. And as soon as the music ended, another one asked her to dance. I realized then they'd all want their turn with her. It's just how they operate";

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

// console.log(compareSentences(correctSentenceMatrix, inCorrectSentenceMatrix));




const cartesianProduct = async (setA, setB) => {
    // Init product set.
    const product = []
    // Go through all elements of sets and push all possible pairs.
    for (let indexA = 0; indexA < setA.length; indexA += 1) {
        for (let indexB = 0; indexB < setB.length; indexB += 1) {
            // Add current product pair to the product set.
            //try with returning idex of the shared elements
            if (setA[indexA] === setB[indexB])
                product.push(setA[indexA])
        }
    }

    // Return cartesian product set.
    return product
}




/**
 * @param arr is array of string as words
 * @param shareArr is array of words but shareArr ⊆ E arr
 * @return arrayOfsharedIndexes which is array index of shared subsets in sets
 * function get array and share array then find the index of shared array in the array
 */
const findIndexShared = async (shareArr, arr) => {
    let arrayOfsharedIndexes = []
    for (let i = 0; i < shareArr.length; i++) {
        const Sharedelement = shareArr[i];
        let theIndexes = arr.indexOf(Sharedelement)
        arrayOfsharedIndexes.push(theIndexes)
    }
    return arrayOfsharedIndexes;
}
async function ProccessSentence() {
    let sentence1 = correct
    let sentence2 = inCorrect
    let arr1 = sentence1.split(' ');
    let arr2 = sentence2.split(' ');
    const firstCartesian = await cartesianProduct(arr1, arr2);
    // third shared element
    // const seconandCartisian = await cartesianProduct(firstCartesian, arr3);
    // console.log(seconandCartisian)
    //for each of seconandCartisian elements,  find the index in the sentences (1-3)
    //the the range between setA(setence1) index 
    // function get array and share array then find the index of shared array in the array
    const sharedindexes1 = await findIndexShared(firstCartesian, arr1)
    const sharedindexes2 = await findIndexShared(firstCartesian, arr2)
    console.log(sharedindexes1)
    console.log(sharedindexes2)


}

ProccessSentence()




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

console.log(compareSentence("I was very angry. Somehow they always made me angry. I know they are supposed to be amusing, and you should be tolerant, but I wanted to swing on one, any one, anything to shatter that superior, simpering composure. Instead, I walked down the street and had a beer at the bar at the next Bal. The beer was not good and I had a worse cognac to take the taste out of my mouth. When I came back to the Bal there was a crowd on the floor and Georgette was dancing with the tall blond youth, who danced big-hippily, carrying his head on one side, his eyes lifted as he danced. As soon as the music stopped another one of them asked her to dance. She had been taken up by them. I knew then that they would all dance with her. They are like that.", "I was so annoyed with them, as usual. I know I should be more tolerant since they're meant to entertain, but I felt like lashing out at one of them to break through that smug composure. Instead, I went to a nearby bar for a beer to cool off. The beer wasn't good so I had some bad cognac too, just to get the taste out. When I returned, a crowd had formed as Georgette danced with one of those tall blond guys, dancing pretentiously with his head tilted as if he didn't have a care. And as soon as the music ended, another one asked her to dance. I realized then they'd all want their turn with her. It's just how they operate"));






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