import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
// reducers
// import authReducer from '../features/auth/slice';
// import spaceReducer from '../features/space/slice';
// persist configs
// import authPersistConfig from '../features/auth/persistConfig';

const rootReducer = combineReducers(
	{
		// taskList : taskListReducer,
		// space    : spaceReducer,
		// auth     : persistReducer(authPersistConfig, authReducer),
	},
);

export default rootReducer;
