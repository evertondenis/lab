import createReducer from 'core/utils/redux';
import { types } from './actions';

export const initialState = {
  customers: {},
  loaders: {
    customersList: true
  }
};

const reducer = {
  [types.UPDATE_LOADERS](state, { loaders }) {
    return {
      ...state,
      loaders: { ...state.loaders, ...loaders }
    };
  },
  [types.CUSTOMERS_LOADED](state, { data }) {
    return {
      ...state,
      customers: data
    };
  }
};

export default createReducer(initialState, reducer);
