import React, { useEffect, useState } from 'react';

import userApi from 'apis/user';
import ContainerPage from 'components/shared/containerPage/ContainerPage';
import EditProfile from 'components/features/user/profile/editProfile';

const EditUserProfile = () => {
	const [ user, setUser ] = useState(null);
	const [ isLoading, setIsLoading ] = useState(true);

	useEffect(() => {
		const getUser = async id => {
			const userData = await userApi.get.userById(id);
			setUser(userData[0]);
		};

		getUser('61e6c44c8468206c684f0363');
		setIsLoading(false);
	}, []);

	if (isLoading) {
		return (
			<React.Fragment>
				<ContainerPage>
					<p>loading...</p>
				</ContainerPage>
			</React.Fragment>
		);
	}
	else {
		return (
			<React.Fragment>
				<ContainerPage>
					{user && <EditProfile info={user} />}
				</ContainerPage>
			</React.Fragment>
		);
	}
};

export default EditUserProfile;
