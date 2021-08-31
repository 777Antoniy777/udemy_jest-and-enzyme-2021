import { ShallowWrapper } from 'enzyme';

export const getTestingElem = (wrapper: ShallowWrapper, attr: string) => {
  return wrapper.find(`[data-test="${attr}"]`);
};