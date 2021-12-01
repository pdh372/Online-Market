import STATUS from '../../constants/status';

const INITIAL_STATE = {
	status : STATUS.IDLE,
	error  : null,

	jwt    : '',
};

export default INITIAL_STATE;
