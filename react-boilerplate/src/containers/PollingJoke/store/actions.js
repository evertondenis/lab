export const types = {
  GET_JOKE: 'JOKE/GET_JOKE',
  STOP_JOKE: 'JOKE/STOP_JOKE',
  JOKE_LOADED: 'JOKE/JOKE_LOADED'
};

export const actions = {
  getJoke: () => ({ type: types.GET_JOKE }),
  stopPolling: () => ({ type: types.STOP_JOKE }),
  jokeLoaded: (data) => ({ type: types.JOKE_LOADED, data })
};
