import axiosDotNet from '../rootDotNet';

class Put {
	user = (data) => {
		return axiosDotNet.put('/user/put/' + data.User.ObjectId, data, {
			headers : {
				'x-auth-token' : 'token',
			},
		});
	};

	email = ({ userData, token }) => {
		return axiosDotNet.put('/users/email', userData, {
			headers : {
				'x-auth-token' : token,
			},
		});
	};

	verifyChangeEmail = ({ token }) => {
		return axiosDotNet.put('/users/verify-change-email', null, {
			headers : {
				'x-auth-token' : token,
			},
		});
	};

	password = ({ token, newPassword, currentPassword }) => {
		return axiosDotNet.put(
			'/users/password',
			{ newPassword, currentPassword },
			{
				headers : {
					'x-auth-token' : token,
				},
			},
		);
	};

	forgetPassword = data => {
		return axiosDotNet.put('/User/ForgetPassword', data, {
			headers : {
				'x-auth-token' : 'token',
			},
		});
	};

	user = (data) => {
		return axiosDotNet.put('/User/put/' + data.User.ObjectId, data, {
			headers : {
				'x-auth-token' : 'token',
			},
		});
	};
}

export default new Put();
