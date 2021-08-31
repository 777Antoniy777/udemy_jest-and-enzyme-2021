import React from 'react';
import { Congrats, CongratsProps } from './Congrats';
import { shallow } from 'enzyme';
import { getTestingElem } from '../../test/test-utils';
import { setupEnzyme } from '../../test/setup-enzyme';

setupEnzyme();
const getWrapper = (props: CongratsProps) => shallow(<Congrats {...props} />);

test('renders Congrats component', () => {
  const wrapper = getWrapper({ status: false });
  const congratsComponent = getTestingElem(wrapper, 'component-congrats');

  expect(congratsComponent.length).toBe(1);
});

describe('status success message', () => {
  test('message is hidden if status prop is false', () => {
    const wrapper = getWrapper({ status: false });
    const congratsMessage = getTestingElem(wrapper, 'congrats-message');

    expect(congratsMessage.length).toBe(0);
  });

  test('message is showing and no empty if status prop is true', () => {
    const wrapper = getWrapper({ status: true });
    const congratsMessageText = getTestingElem(wrapper, 'congrats-message').text();

    expect(congratsMessageText.length).not.toBe(0);
  });
});
