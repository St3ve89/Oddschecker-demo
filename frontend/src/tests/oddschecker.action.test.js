import * as constant from '../store/oddschecker.constant';
import * as action from '../store/oddschecker.action';

const data = [];

describe('Testing all the oddschecker actions', () => {
  it('should create an action to set data', () => {
    expect(action.setOddscheckerDataAction(data)).toEqual({
      type: constant.SET_ODDSCHECKER_DATA,
      data,
    });
  });
});
