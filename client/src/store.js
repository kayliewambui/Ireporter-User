import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import adminReducer from './reducers/adminReducer';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  admin: adminReducer,
  user: userReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
