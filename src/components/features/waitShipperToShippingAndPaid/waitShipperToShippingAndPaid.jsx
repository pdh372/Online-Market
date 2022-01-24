import React, { useState } from 'react';
import OrderByStatus from './orderByStatus/OrderByStatus';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

const WaitShippingToShippingAndPaid = () => {
	const [ currentTab, setCurrentTab ] = useState('waiting-shipper');

	const handleChangeTab = e => {
		setCurrentTab(e);
	};

	return (
		<div className='card-container'>
			<Tabs type='card' size='large' tabBarGutter={100} onChange={handleChangeTab}>
				<TabPane tab='Chờ Lấy Hàng' key='waiting-shipper'>
					{currentTab === 'waiting-shipper' && <OrderByStatus currentStatus={currentTab} />}
				</TabPane>
				<TabPane tab='Đang Giao' key='delivering'>
					{currentTab === 'delivering' && <OrderByStatus currentStatus={currentTab} />}
				</TabPane>
			</Tabs>
		</div>
	);
};

export default WaitShippingToShippingAndPaid;
