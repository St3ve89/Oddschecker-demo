import { initialState, oddscheckerReducer } from '../store/oddschecker.reducer';
import * as constant from '../store/oddschecker.constant';

describe('Yobota reducer', () => {
  it('should handle SET_YOBOTA_DATA', () => {
    expect(
      oddscheckerReducer(initialState, {
        type: constant.SET_ODDSCHECKER_DATA,
        data: [],
      })
    );
  });
});
