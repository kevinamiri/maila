import React, { useState } from 'react';

function AppGrammar() {
  const [correctSentence, setCorrectSentence] = useState('');
  const [incorrectSentence, setIncorrectSentence] = useState('');
  const [displaySentence, setDisplaySentence] = useState([]);

  const compareSentences = () => {
    const correctWords = correctSentence.split(' ');
    const incorrectWords = incorrectSentence.split(' ');

    const maxLength = Math.max(correctWords.length, incorrectWords.length);
    const comparison = [];

    for (let i = 0; i < maxLength; i++) {
      if (incorrectWords[i] !== correctWords[i]) {
        comparison.push({
          word: incorrectWords[i] || '',
          correctWord: correctWords[i] || '',
          isIncorrect: true,
        });
      } else {
        comparison.push({
          word: incorrectWords[i] || '',
          correctWord: correctWords[i] || '',
          isIncorrect: false,
        });
      }
    }

    setDisplaySentence(comparison);
  };

  const handleWordClick = (index) => {
    const newDisplaySentence = [...displaySentence];
    newDisplaySentence[index].word = newDisplaySentence[index].correctWord;
    newDisplaySentence[index].isIncorrect = false;
    setDisplaySentence(newDisplaySentence);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Sentence Correction AppGrammar</h2>
      <div>
        <label>
          Correct Sentence:
          <br />
          <input
            type="text"
            value={correctSentence}
            onChange={(e) => setCorrectSentence(e.target.value)}
            style={{ width: '100%', marginBottom: '10px' }}
          />
        </label>
      </div>
      <div>
        <label>
          Incorrect Sentence:
          <br />
          <input
            type="text"
            value={incorrectSentence}
            onChange={(e) => setIncorrectSentence(e.target.value)}
            style={{ width: '100%', marginBottom: '10px' }}
          />
        </label>
      </div>
      <button onClick={compareSentences}>Compare Sentences</button>
      <div style={{ marginTop: '20px' }}>
        {displaySentence.map((item, index) => (
          <span
            key={index}
            onClick={() => item.isIncorrect && handleWordClick(index)}
            style={{
              textDecoration: item.isIncorrect ? 'line-through' : 'none',
              cursor: item.isIncorrect ? 'pointer' : 'default',
              color: item.isIncorrect ? 'red' : 'black',
              marginRight: '5px',
            }}
            title={
              item.isIncorrect ? `Click to replace with "${item.correctWord}"` : ''
            }
          >
            {item.word}
          </span>
        ))}
      </div>
    </div>
  );
}

export default AppGrammar;
