import React from 'react';

function Account ({ onChangeTab }) {
	return (
		<section className='dashboard__menu'>
			<div className='menu-square'>
				<div className='menu-square__avt' />
			</div>

			<div className='menu-item menu-item-actived' onClick={e => onChangeTab(0, e)}>
				Thông Tin Cửa Hàng
			</div>
		</section>
	);
}

export default Account;
