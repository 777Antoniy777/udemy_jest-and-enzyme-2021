import React from 'react';
import { App } from './App';
import Enzyme, {shallow, ShallowWrapper} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const getWrapper = () => shallow(<App />);
const getTestingElem = (wrapper: ShallowWrapper, attr: string) => {
  return wrapper.find(`[data-test="${attr}"]`);
};

describe('renders all elements and component', () => {
  it('renders App', () => {
    const wrapper = getWrapper();
    const appComponent = getTestingElem(wrapper, 'component-app');

    expect(appComponent.length).toBe(1);
  });

  it('renders button', () => {
    const wrapper = getWrapper();
    const button = getTestingElem(wrapper, 'button');

    expect(button.length).toBe(1);
  });

  it('renders counter', () => {
    const wrapper = getWrapper();
    const counter = getTestingElem(wrapper, 'counter');

    expect(counter.length).toBe(1);
  });
});

it('counter starts since 0', () => {
  const wrapper = getWrapper();
  const countText = getTestingElem(wrapper, 'count').text();

  expect(countText).toBe('0');
});

it('clicking button increases counter', () => {
  const wrapper = getWrapper();
  const button = getTestingElem(wrapper, 'button');
  button.simulate('click');

  const countText = getTestingElem(wrapper, 'count').text();
  expect(countText).toBe('1');
});
