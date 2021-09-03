import React from 'react';
import { Congrats } from './Congrats/Congrats';
import { GuessedWords } from './GuessedWords/GuessedWords';

export const Jotto = () => {
  return (
    <div className="jotto">
      <h1>Jotto</h1>

      <Congrats status={false} />

      <GuessedWords guessedWords={[
        {
          guessedWord: 'Картошка',
          letterMatchCount: 2,
        }
      ]} />
    </div>
  );
};
