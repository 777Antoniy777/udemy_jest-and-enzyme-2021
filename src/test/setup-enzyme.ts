import Enzyme from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

export const setupEnzyme = () => {
  Enzyme.configure({ adapter: new EnzymeAdapter() });
};