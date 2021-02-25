import { initialState, oddscheckerReducer } from '../store/oddschecker.reducer';
import * as constant from '../store/oddschecker.constant';

describe('Oddschecker reducer', () => {
  it('should handle SET_ODDSCHECKER_DATA', () => {
    expect(
      oddscheckerReducer(initialState, {
        type: constant.SET_ODDSCHECKER_DATA,
        data: [],
      })
    );
  });
});
