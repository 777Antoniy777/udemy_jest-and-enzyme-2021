import React from 'react';
import { Congrats } from './Congrats';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import { getTestingElem } from '../../test/testUtils';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const mockProps: Congrats = {
  status: false,
};
const getWrapper = () => shallow(<Congrats {...mockProps} />);

test('renders congrats-component', () => {
  const wrapper = getWrapper();
  const congratsComponent = getTestingElem(wrapper, 'congrats-component');

  expect(congratsComponent.length).toBe(1);
});

describe('status success message', () => {
  test('message is hidden if status prop os false', () => {});

  test('message is showing if status prop os true', () => {});
});
