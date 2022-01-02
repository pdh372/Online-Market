import React, { useState } from 'react';
import { Tag } from 'antd';
import DeleteUserModal from '../../../../elements/modals/delete/deleteUserModal/deleteUser';
import { AiOutlineDelete } from 'react-icons/ai';

const DeleteAction = () => {
	// state
	const [ showDeleteUserModal, setShowDeleteUserModal ] = useState(false);

	return (
		<React.Fragment>
			<Tag
				style={{ cursor: 'pointer', backgroundColor: 'red', borderRadius: '5px' }}
				onClick={() => setShowDeleteUserModal(true)}
			>
				<AiOutlineDelete />
			</Tag>

			{showDeleteUserModal && <DeleteUserModal hidden={showDeleteUserModal} setHidden={setShowDeleteUserModal} />}
		</React.Fragment>
	);
};

export default DeleteAction;
