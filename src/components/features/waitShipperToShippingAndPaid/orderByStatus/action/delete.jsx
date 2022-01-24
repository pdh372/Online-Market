import React from 'react';
import { Tag } from 'antd';
import { AiOutlineDelete } from 'react-icons/ai';

const DeleteAction = ({ onDelete }) => {
	// state

	return (
		<React.Fragment>
			<Tag onClick={onDelete} style={{ cursor: 'pointer', backgroundColor: 'red', borderRadius: '5px' }}>
				<AiOutlineDelete />
			</Tag>
		</React.Fragment>
	);
};

export default DeleteAction;
