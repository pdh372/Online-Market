export const login = (state, action) => {
	state.jwt = action.payload.jwt;
};
