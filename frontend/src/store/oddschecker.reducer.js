import * as constant from './oddschecker.constant';

export const initialState = {
  data: [],
};

export const oddscheckerReducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.SET_ODDSCHECKER_DATA:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};
