import React from 'react';
// Styled Components
import DeleteUserModalStyled from './deleteUser.styled';

const DeleteUserModal = ({ hidden, setHidden }) => {
	const handleDeleteUser = async _id => {};

	return (
		<DeleteUserModalStyled
			centered
			visible={hidden}
			footer={null}
			className='modal__delete-user-modal'
			onCancel={() => setHidden(false)}
		>
			<div className='delete-user-modal__container'>
				<div className='delete-user-modal__question'>Are you sure delete </div>
				<div className='delete-user-modal__name'>{'xoa don hang khum'}</div>
				<div className='delete-user-modal__btn'>
					<button onClick={() => handleDeleteUser('1')}>Delete</button>
				</div>
			</div>
		</DeleteUserModalStyled>
	);
};

export default DeleteUserModal;
