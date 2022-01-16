import React from 'react';

function Account ({ onChangeTab }) {
	// redux
	// handleEven
	// const handleLogout = () => {
	// 	console.log('logout');
	// };

	return (
		<section className='dashboard__menu'>
			<div className='menu-square'>
				<div className='menu-square__avt'>{/* <span className='menu-square__avt-icon'>C</span> */}</div>
				{/* <div className='menu-square__wb'>{'account'}</div> */}
			</div>

			<div className='menu-item menu-item-actived' onClick={e => onChangeTab(0, e)}>
				Thông Tin Cửa Hàng
			</div>
			{/* <div className='menu-item' onClick={handleLogout}>
				Đăng Xuất
			</div> */}
		</section>
	);
}

export default Account;
