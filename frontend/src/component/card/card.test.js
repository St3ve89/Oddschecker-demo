import { Card } from '.';
import renderer from 'react-test-renderer';

test('renders Card component', () => {
  const card = renderer.create(<Card />).toJSON();
  expect(card).toMatchSnapshot();
});
