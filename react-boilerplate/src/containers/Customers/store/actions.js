export const types = {
  UPDATE_LOADERS: 'CUSTOMERS/UPDATE_LOADERS',
  GET_CUSTOMERS: 'CUSTOMERS/GET_CUSTOMERS',
  CUSTOMERS_LOADED: 'CUSTOMERS/CUSTOMERS_LOADED'
};

export const actions = {
  updateLoaders: (loaders) => ({ type: types.UPDATE_LOADERS, loaders }),
  getCustomers: () => ({ type: types.GET_CUSTOMERS }),
  customersLoaded: (data) => ({ type: types.CUSTOMERS_LOADED, data })
};
