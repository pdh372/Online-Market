import axiosDotNet from '../rootDotNet';

class Get {
	userById = async (userId) => {
		return axiosDotNet.get('/user/get/' + userId)
	}

	userStatus = async (role, status) => {
		return axiosJava.get('/user/'+role+'/statusregister/'+status);
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
