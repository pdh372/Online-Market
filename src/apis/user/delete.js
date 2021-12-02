import rootApi from '../root';

const changeProfile = ({ userdata, token }) => {
	return rootApi.put('/users/profile', userdata, {
		headers : {
			'x-auth-token' : token,
		},
	});
};

export default changeProfile;
