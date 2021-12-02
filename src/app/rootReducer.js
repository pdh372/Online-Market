import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
// reducers
// import authReducer from '../features/auth/slice';
// import spaceReducer from '../features/space/slice';
import userReducer from '../slices/user/slice';
// persist configs
// import authPersistConfig from '../features/auth/persistConfig';

const rootReducer = combineReducers({
	user : userReducer,
	// taskList : taskListReducer,
	// space    : spaceReducer,
	// auth     : persistReducer(authPersistConfig, authReducer),
});

export default rootReducer;
