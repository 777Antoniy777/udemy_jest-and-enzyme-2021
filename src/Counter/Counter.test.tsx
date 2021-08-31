import React from 'react';
import { Counter } from './Counter';
import { shallow } from 'enzyme';
import { getTestingElem } from '../test/test-utils';
import { setupEnzyme } from '../test/setup-enzyme';

setupEnzyme();
const getWrapper = () => shallow(<Counter />);

let wrapper;
let incrButton;
let decrButton;
beforeAll(() => {
  wrapper = getWrapper();
  incrButton = getTestingElem(wrapper, 'increment-button');
  decrButton = getTestingElem(wrapper, 'decrement-button');
});

describe('renders all elements and component', () => {
  it('renders Counter', () => {
    const counterComponent = getTestingElem(wrapper, 'component-counter');

    expect(counterComponent.length).toBe(1);
  });

  it('renders increment button', () => {
    const button = getTestingElem(wrapper, 'increment-button');

    expect(button.length).toBe(1);
  });

  it('renders decrement button', () => {
    const button = getTestingElem(wrapper, 'decrement-button');

    expect(button.length).toBe(1);
  });

  it('renders counter', () => {
    const counter = getTestingElem(wrapper, 'counter');

    expect(counter.length).toBe(1);
  });
});

describe('state counter', () => {
  it('counter starts since 0', () => {
    const countText = getTestingElem(wrapper, 'count').text();

    expect(countText).toBe('0');
  });

  it('clicking button increases counter', () => {
    incrButton.simulate('click');

    const countText = getTestingElem(wrapper, 'count').text();
    expect(countText).toBe('1');
  });

  it('clicking button decreases counter', () => {
    incrButton.simulate('click');
    decrButton.simulate('click');

    const countText = getTestingElem(wrapper, 'count').text();
    expect(countText).toBe('0');
  });

  it('clicking decrement button if counter has 0, set 0 state', () => {
    decrButton.simulate('click');

    const countText = getTestingElem(wrapper, 'count').text();
    expect(countText).toBe('0');
  });
});

describe('state error message', () => {
  it('show error message if clicking decrement button if counter has 0', () => {
    decrButton.simulate('click');

    const errorMessage = getTestingElem(wrapper, 'error-message');
    expect(errorMessage.length).toBe(1);
  });

  it('hide error message if clicking increment button', () => {
    // производим сначала уменьшение счетчика, чтобы вызвать ошибку
    // затем увеличение для ее скрытия
    decrButton.simulate('click');
    incrButton.simulate('click');

    // проверяем что в новом слепке сообщение скрыто
    wrapper = getWrapper();
    const errorMessage = getTestingElem(wrapper, 'error-message');
    expect(errorMessage.length).toBe(0);
  });
});
