import React, { useState } from 'react';
import CancelOrder from './cancelOrder/CancelOrder';
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
				<TabPane tab='Chờ Xác Nhận' key='comfirming'>
					<p>Đơn Hàng Đang Chờ Người Bán Xác Nhận</p>
					<p>Đơn Hàng Đang Chờ Người Bán Xác Nhận</p>
					<p>Đơn Hàng Đang Chờ Người Bán Xác Nhận</p>
				</TabPane>
				<TabPane tab='Chờ Lấy Hàng' key='waiting-shipper'>
					<p>Đơn Hàng Đang Chờ Shipper Lấy</p>
					<p>Đơn Hàng Đang Chờ Shipper Lấy</p>
					<p>Đơn Hàng Đang Chờ Shipper Lấy</p>
				</TabPane>
				<TabPane tab='Đang Giao' key='delivering'>
					<p>Đơn Hàng Đang Giao</p>
					<p>Đơn Hàng Đang Giao</p>
					<p>Đơn Hàng Đang Giao</p>
				</TabPane>
				<TabPane tab='Đã Giao' key='paid'>
					<p>Đơn Hàng Đã Giao</p>
					<p>Đơn Hàng Đã Giao</p>
					<p>Đơn Hàng Đã Giao</p>
				</TabPane>
				<TabPane tab='Đã Hủy' key='canceled'>
					{currentTab === 'canceled' && <CancelOrder currentStatus={currentTab} />}
				</TabPane>
			</Tabs>
		</div>
	);
};

export default OrderTrackingComponent;
