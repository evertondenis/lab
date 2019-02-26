import { call, put, takeEvery, all } from 'redux-saga/effects';
import CustomersProvider from 'core/providers/customers';
import {
  actions as CustomersActions,
  types as CustomersTypes
} from './actions';

export function* loadCustomers() {
  try {
    yield put(CustomersActions.updateLoaders({ customersList: true }));
    const customers = yield call(CustomersProvider.all, {
      results: 5,
      nat: 'us,fr,br'
    });
    yield put(CustomersActions.customersLoaded(customers.results));
  } catch (error) {
    const { message } = error.response.data;
    console.log('message error: ', message);
  } finally {
    yield put(CustomersActions.updateLoaders({ customersList: false }));
  }
}

export default function* root() {
  yield all([takeEvery(CustomersTypes.GET_CUSTOMERS, loadCustomers)]);
}
