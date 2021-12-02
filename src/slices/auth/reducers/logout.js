import INITIAL_STATE from '../initialState';

export const logout = state => {
	state.jwt = INITIAL_STATE.jwt;
	state.error = INITIAL_STATE.error;
	state.status = INITIAL_STATE.status;
};
