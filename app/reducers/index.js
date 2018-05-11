import { routerReducer as router } from 'react-router-redux';
import { combineReducers } from 'redux';
import configurations from '../containers/ConfigurationDialog/reducer';

const rootReducer = combineReducers({
  router,
  configurations
});

export default rootReducer;
