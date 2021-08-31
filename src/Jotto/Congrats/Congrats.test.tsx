import React from 'react';
import { Congrats } from './Congrats';
import { shallow } from 'enzyme';
import { getTestingElem } from '../../test/test-utils';
import { setupEnzyme } from '../../test/setup-enzyme';

setupEnzyme();
const getWrapper = (props: Congrats) => shallow(<Congrats {...props} />);

test('renders congrats-component', () => {
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
    const congratsMessage = getTestingElem(wrapper, 'congrats-message');
    const congratsMessageText = congratsMessage.text();

    expect(congratsMessage.length).toBe(1);
    expect(congratsMessageText.length).not.toBe(0);
  });
});
