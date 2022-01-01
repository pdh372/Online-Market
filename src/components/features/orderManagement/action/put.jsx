import React from 'react';
import { Tag } from 'antd';
import { AiFillCheckCircle } from 'react-icons/ai';

const PutAction = () => {
	return (
		<React.Fragment>
			<Tag style={{ cursor: 'pointer', backgroundColor: 'lightgreen', borderRadius: '5px' }}>
				<AiFillCheckCircle />
			</Tag>
		</React.Fragment>
	);
};

export default PutAction;
