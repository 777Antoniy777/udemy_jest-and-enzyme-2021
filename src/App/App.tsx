import React from 'react';
import { Counter } from '../Counter/Counter';
import { Jotto } from '../Jotto/Jotto';
import './App.scss';

export const App = () => {
  return (
    <div className="app">
      {/*Модуль 1*/}
      <Counter />

      {/*Модуль 2*/}
      <Jotto />
    </div>
  );
};
