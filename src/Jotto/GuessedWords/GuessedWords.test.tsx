import React from 'react';
import {shallow} from 'enzyme';
import {GuessedWords, GuessedWordsProps} from './GuessedWords';
import {setupEnzyme} from '../../test/setup-enzyme';
import {getTestingElem} from "../../test/test-utils";

setupEnzyme();
const getWrapper = (props: GuessedWordsProps) => shallow(<GuessedWords {...props} />);

test('renders GuessedWords component', () => {
  const wrapper = getWrapper({
    guessedWords: [],
  });
  const guessedWordsComponent = getTestingElem(wrapper, 'component-guessed-words');

  expect(guessedWordsComponent.length).toBe(1);
});

test('renders instructions if no guests words', () => {
  const wrapper = getWrapper({
    guessedWords: [],
  });
  const instructionsText = getTestingElem(wrapper, 'instructions').text();

  expect(instructionsText.length).not.toBe(0);
});

describe('renders parts if guests words exist', () => {
  test('renders table wrapper guests words', () => {
    const wrapper = getWrapper({
      guessedWords: [
        {
          guessedWord: 'Телефон',
          letterMatchCount: 2,
        }
      ],
    });
    const tableGuestsWords = getTestingElem(wrapper, 'table-wrapper');

    expect(tableGuestsWords.length).toBe(1);
  });

  test('correct number of guests words data', () => {
    const wrapper = getWrapper({
      guessedWords: [
        {
          guessedWord: 'Телефон',
          letterMatchCount: 2,
        },
        {
          guessedWord: 'Телевизор',
          letterMatchCount: 3,
        }
      ],
    });
    const tableGuestsWords = getTestingElem(wrapper, 'table');

    expect(tableGuestsWords.children().length).toBe(3);
  });
});
