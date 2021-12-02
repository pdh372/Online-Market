import React, { useState, useEffect } from 'react';

import { Tabs } from 'antd';

const { TabPane } = Tabs;

const OrderTrackingComponent = () => {
	const [ currentTab, setCurrentTab ] = useState(0);

	useEffect(() => {
		setCurrentTab(1);
	}, []);

	const handleChangeTab = e => {
		console.log(e === currentTab);
	};

	return (
		<div className='card-container'>
			<Tabs type='card' size='large' tabBarGutter={100} onChange={handleChangeTab}>
				<TabPane tab='Tất Cả' key='1'>
					<p>Tất Cả Đơn Hàng</p>
					<p>Tất Cả Đơn Hàng</p>
					<p>Tất Cả Đơn Hàng</p>
				</TabPane>
				<TabPane tab='Chờ Xác Nhận' key='2'>
					<p>Đơn Hàng Đang Chờ Người Bán Xác Nhận</p>
					<p>Đơn Hàng Đang Chờ Người Bán Xác Nhận</p>
					<p>Đơn Hàng Đang Chờ Người Bán Xác Nhận</p>
				</TabPane>
				<TabPane tab='Chờ Lấy Hàng' key='3'>
					<p>Đơn Hàng Đang Chờ Shipper Lấy</p>
					<p>Đơn Hàng Đang Chờ Shipper Lấy</p>
					<p>Đơn Hàng Đang Chờ Shipper Lấy</p>
				</TabPane>
				<TabPane tab='Đang Giao' key='4'>
					<p>Đơn Hàng Đang Giao</p>
					<p>Đơn Hàng Đang Giao</p>
					<p>Đơn Hàng Đang Giao</p>
				</TabPane>
				<TabPane tab='Đã Giao' key='5'>
					<p>Đơn Hàng Đã Giao</p>
					<p>Đơn Hàng Đã Giao</p>
					<p>Đơn Hàng Đã Giao</p>
				</TabPane>
				<TabPane tab='Đã Hủy' key='6'>
					<p>Đơn Hàng Đã Hủy</p>
					<p>Đơn Hàng Đã Hủy</p>
					<p>Đơn Hàng Đã Hủy</p>
				</TabPane>
			</Tabs>
		</div>
	);
};

export default OrderTrackingComponent;
