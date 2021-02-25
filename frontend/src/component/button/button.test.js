import { Button } from '.';
import renderer from 'react-test-renderer';

test('renders Button component', () => {
  const button = renderer.create(<Button />).toJSON();
  expect(button).toMatchSnapshot();
});
