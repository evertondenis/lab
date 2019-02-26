import { call, put, take, race } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import axios from 'axios';
import { actions as PollingActions, types as PollingTypes } from './actions';

export function* loadJoke() {
  while (true) {
    try {
      const joke = yield call(() =>
        axios.get('https://icanhazdadjoke.com/', {
          headers: { Accept: 'application/json' }
        })
      );
      yield put(PollingActions.jokeLoaded(joke.data));
      yield call(delay, 4000);
    } catch (error) {
      const { message } = error.response.data;
      // eslint-disable-next-line
      console.log('message error: ', message);
    }
  }
}

export default function* root() {
  while (true) {
    yield take(PollingTypes.GET_JOKE, loadJoke);
    yield race([call(loadJoke), take(PollingTypes.STOP_JOKE)]);
  }
}
