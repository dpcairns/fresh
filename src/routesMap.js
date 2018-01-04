import { redirect } from 'redux-first-router';
import { fetchYummyThings } from '../server/fakeApi.js';

export default {
  HOME: '/',

  DETAIL: {
    path: '/detail/:category',
    thunk: async (dispatch, getState) => {
      const { payload: { category } } = getState().location;
      const yummyThings = await fetchYummyThings(`/api/category/${category}`);

      if (yummyThings.length === 0) {
        const action = redirect({
          type: 'DETAIL',
          payload: { category: 'redux' }
        });

        return dispatch(action);
      }

      dispatch({
        type: 'YUMMY_THINGS_FETCHED',
        payload: { category, yummyThings }
      });
    }
  }
};
