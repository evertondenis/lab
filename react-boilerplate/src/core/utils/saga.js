/* eslint-disable */
import get from 'lodash/get';
import { delay } from 'redux-saga';
import { spawn, call, put } from 'redux-saga/effects';

export const makeRestartable = (saga) =>
  function*() {
    yield spawn(function*() {
      while (true) {
        try {
          yield call(saga);
        } catch (error) {
          const status = get(error, 'response.status');

          if (status) {
            console.log(`http error ${status}`);
          } else {
            console.error(error);
          }
        }

        yield delay(1000);
      }
    });
  };
