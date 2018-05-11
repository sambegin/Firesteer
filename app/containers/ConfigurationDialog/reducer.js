import shortid from 'shortid';
import { SAVE_FIREBASE_CONFIG } from './actions';

const initialState = {
  firebaseConfigs: []
};

export default function configurations(state = initialState, action) {
  switch (action.type) {
    case SAVE_FIREBASE_CONFIG: {
      const configuration = { id: shortid.generate(), name: action.config.name, json: action.config.json };
      state.firebaseConfigs.push(configuration);
      return Object.assign(initialState, { firebaseConfigs: state.firebaseConfigs });
    }
    default:
      return state;
  }
}

