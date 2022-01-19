import React, { useState } from 'react';
import CancelOrder from './cancelOrder/CancelOrder';
import OrderByStatus from './orderByStatus/OrderByStatus';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

const OrderTrackingComponent = () => {
	const [ currentTab, setCurrentTab ] = useState(0);

	const handleChangeTab = e => {
		setCurrentTab(e);
	};

	return (
		<div className='card-container'>
			<Tabs type='card' size='large' tabBarGutter={100} onChange={handleChangeTab}>
				<TabPane tab='Tất Cả' key='all'>
					<p>Tất Cả Đơn Hàng</p>
					<p>Tất Cả Đơn Hàng</p>
					<p>Tất Cả Đơn Hàng</p>
				</TabPane>
				<TabPane tab='Chờ Xác Nhận' key='confirming'>
					{currentTab === 'confirming' && <OrderByStatus currentStatus={currentTab} />}
				</TabPane>
				<TabPane tab='Đang Chuẩn bị' key='preparing'>
					{currentTab === 'preparing' && <OrderByStatus currentStatus={currentTab} />}
				</TabPane>
				<TabPane tab='Chờ Lấy Hàng' key='waiting-shipper'>
					{currentTab === 'waiting-shipper' && <OrderByStatus currentStatus={currentTab} canDelete />}
				</TabPane>
				<TabPane tab='Đang Giao' key='delivering'>
					{currentTab === 'delivering' && <OrderByStatus currentStatus={currentTab} canDelete />}
				</TabPane>
				<TabPane tab='Đã Giao' key='paid'>
					{currentTab === 'paid' && <OrderByStatus currentStatus={currentTab} canDelete />}
				</TabPane>
				<TabPane tab='Đã Hủy' key='canceled'>
					{currentTab === 'canceled' && <CancelOrder currentStatus={currentTab} />}
				</TabPane>
			</Tabs>
		</div>
	);
};

export default OrderTrackingComponent;
