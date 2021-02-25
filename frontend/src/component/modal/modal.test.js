import { Modal } from '.';
import renderer from 'react-test-renderer';

test('renders Modal component', () => {
  const modal = renderer.create(<Modal />).toJSON();
  expect(modal).toMatchSnapshot();
});
