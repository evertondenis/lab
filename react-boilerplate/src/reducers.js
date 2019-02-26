import { combineReducers } from 'redux';
import customers from 'containers/Customers/store/reducer';
import polling from 'containers/PollingJoke/store/reducer';

export default combineReducers({
  customers,
  polling
});
