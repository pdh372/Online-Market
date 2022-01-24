import React, { useState } from 'react';
import OrderByStatus from './orderByStatus/OrderByStatus';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

const OrderManagement = () => {
	const [ currentTab, setCurrentTab ] = useState('confirming');

	const handleChangeTab = e => {
		setCurrentTab(e);
	};

	return (
		<div className='card-container'>
			<Tabs type='card' size='large' tabBarGutter={100} onChange={handleChangeTab}>
				<TabPane tab='Chờ Xác Nhận' key='confirming'>
					{currentTab === 'confirming' && <OrderByStatus currentStatus={currentTab} />}
				</TabPane>
				<TabPane tab='Đang Chuẩn bị' key='preparing'>
					{currentTab === 'preparing' && <OrderByStatus currentStatus={currentTab} />}
				</TabPane>
			</Tabs>
		</div>
	);
};

export default OrderManagement;
