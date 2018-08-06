import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reducers from '../reducers/index';
import { getCountries } from '../actions/actions-countries';

const store = createStore(
					reducers, 
					window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
					);

export default store;