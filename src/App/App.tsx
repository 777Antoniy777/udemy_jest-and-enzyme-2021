import React from 'react';
import { Counter } from '../Counter/Counter';
import { Jotto } from '../Jotto/Jotto';

export const App = () => {
  return (
    <div className="App">
      {/*Модуль 1*/}
      <Counter />

      {/*Модуль 2*/}
      <Jotto />
    </div>
  );
};
