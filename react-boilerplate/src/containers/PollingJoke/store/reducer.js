import createReducer from 'core/utils/redux';
import { types } from './actions';

export const initialState = {
  joke: '',
  polling: false
};

const reducer = {
  [types.GET_JOKE](state) {
    return {
      ...state,
      polling: true
    };
  },
  [types.JOKE_LOADED](state, { data }) {
    return {
      ...state,
      joke: data.joke
    };
  },
  [types.STOP_JOKE](state) {
    return {
      ...state,
      polling: false
    };
  }
};

export default createReducer(initialState, reducer);
