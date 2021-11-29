import STATUS from '../../constants/status';

const INITIAL_STATE = {
	status: STATUS.IDLE,
	error: null,

	profile:
		{
			displayName: '',
			department: '',
			position: '',
			title: '',
			email: '',
		},
};

export default INITIAL_STATE;
