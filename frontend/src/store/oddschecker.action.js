import * as constant from './oddschecker.constant';
import { get } from 'axios';

export const setOddscheckerDataAction = (data) => ({
  type: constant.SET_ODDSCHECKER_DATA,
  data,
});

export const getOddScheckerDataAction = (id) => {
  return (dispatch) => {
    try {
      const getResult = async () => {
        const { data } = await get(`http://localhost:4000/${id}`);
        dispatch(setOddscheckerDataAction(data));
      };
      getResult();
    } catch (error) {
      console.log('Error:', error);
    }
  };
};
