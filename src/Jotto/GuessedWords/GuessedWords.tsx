import React, { FC } from 'react';
import { setTestAttributes } from '../../utils/set-test-attributes';
import './GuessedWords.scss';

export interface GuessedWordsProps {
  guessedWords: {
    guessedWord: string;
    letterMatchCount: number;
  }[];
}

export const GuessedWords: FC<GuessedWordsProps> = (props) => {
  const { guessedWords } = props;

  const getContent = () => {
    if (guessedWords.length === 0) {
      return <p {...setTestAttributes('instructions')}>Enter your variants and guess!</p>;
    }

    return (
      <div {...setTestAttributes('table-wrapper')}>
        <table className="guessed-words__table" {...setTestAttributes('table')}>
          <tbody>
            <tr>
              <th>Word</th>
              <th>Letter</th>
            </tr>

            {!!guessedWords.length &&
              guessedWords.map((elem) => (
                <tr key={`${elem.guessedWord}_${elem.letterMatchCount}`}>
                  <td>{elem.guessedWord}</td>
                  <td>{elem.letterMatchCount}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  };

  const content = getContent();

  return (
    <div className="guessed-words" {...setTestAttributes('component-guessed-words')}>
      <h2>Try to guess the secret word!</h2>
      {content}
    </div>
  );
};
