import React, { FC } from 'react';
import { setTestAttributes } from '../../utils/set-test-attributes';

export interface GuessedWordsProps {
  guessedWords: {
    guessedWord: string;
    letterMatchCount: number;
  }[];
}

export const GuessedWords: FC<GuessedWordsProps> = (props) => {
  const { guessedWords } = props;

  if (guessedWords.length === 0) {
    return <p {...setTestAttributes('instructions')}>You need to guess word! Enter your variants and guess!</p>;
  }

  return <div {...setTestAttributes('component-guessed-words')}>dd</div>;
};
