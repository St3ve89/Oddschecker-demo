import { Wrapper } from '.';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

test('renders yobota table body component', () => {
  const store = {
    getState: () => ({
      oddschecker: {
        data: [],
      },
    }),
    subscribe: jest.fn(),
    dispatch: jest.fn(),
  };
  const component = renderer
    .create(
      <Provider store={store}>
        <Wrapper />
      </Provider>
    )
    .toJSON();
  expect(component).toMatchSnapshot();
});
