import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Profile = props => {
	const { info } = props;

	const renderUser = () => {
		return (
			<React.Fragment>
				<div className='container'>
					<div className='user-profile'>
						<div className='title'>Tên</div>
						<div className='info'>{info.name}</div>

						<div className='title'>CCCD/CMND</div>
						<div className='info'>{info.ciNum}</div>

						<div className='title'>Email</div>
						<div className='info'>{info.email}</div>

						<div className='title'>Ngày sinh</div>
						<div className='info'>{info.dob}</div>

						<div className='title'>Số điện thoại</div>
						<div className='info'>{info.phoneNumber}</div>

						<div className='title'>Địa chỉ</div>
						<div className='info'>{info.address.streetNo}</div>
					</div>

					<Link to='/profile/edit' className='ant-btn ant-btn-primary'>Chỉnh sửa</Link>
				</div>
			</React.Fragment>
		);
	};

	return <React.Fragment>{renderUser()}</React.Fragment>;
};

export default Profile;
