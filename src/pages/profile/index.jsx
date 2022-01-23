import React, { useEffect, useState } from 'react';

import userApi from 'apis/user';
import ContainerPage from 'components/shared/containerPage/ContainerPage';
import Profile from 'components/features/user/profile/Profile';

const UserProfile = () => {
	const [ user, setUser ] = useState(null);
	const [ isLoading, setIsLoading ] = useState(true);

	useEffect(() => {
		const getUser = async id => {
			const userData = await userApi.get.userById(id);
			setUser(userData[0]);
		};

		getUser('61e6c302071c4a6bdb501b7a');
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
					<Profile info={user} />
				</ContainerPage>
			</React.Fragment>
		);
	}
};

export default UserProfile;
