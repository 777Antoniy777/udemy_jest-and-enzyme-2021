import React from 'react';
import {shallow} from 'enzyme';
import {GuessedWords, GuessedWordsProps} from './GuessedWords';
import {setupEnzyme} from '../../test/setup-enzyme';
import {getTestingElem} from "../../test/test-utils";

setupEnzyme();
const getWrapper = (props: GuessedWordsProps) => shallow(<GuessedWords {...props} />);

test('renders GuessedWords component', () => {
  const wrapper = getWrapper({
    guessedWords: [
      {
        guessedWord: 'Телефон',
        letterMatchCount: 2,
      }
    ],
  });
  const guessedWordsComponent = getTestingElem(wrapper, 'component-guessed-words');

  expect(guessedWordsComponent.length).toBe(1);
});

describe('renders instructions if no guests words', () => {
  const wrapper = getWrapper({
    guessedWords: [],
  });
  const instructionsText = getTestingElem(wrapper, 'instructions').text();

  expect(instructionsText.length).not.toBe(0);
});

describe('there are no guests words', () => {

});
