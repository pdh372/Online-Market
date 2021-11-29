import rootApi from '../root';

class Put {
	email = ({ userData, token }) => {
		return rootApi.put('/users/email', userData, {
			headers : {
				'x-auth-token' : token,
			},
		});
	};

	verifyChangeEmail = ({ token }) => {
		return rootApi.put('/users/verify-change-email', null, {
			headers : {
				'x-auth-token' : token,
			},
		});
	};

	password = ({ token, newPassword, currentPassword }) => {
		return rootApi.put(
			'/users/password',
			{ newPassword, currentPassword },
			{
				headers : {
					'x-auth-token' : token,
				},
			},
		);
	};
}

export default new Put();
