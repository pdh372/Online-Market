import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import ContainerPage from '../components/shared/containerPage/ContainerPage';

class HomePage extends React.Component {
	render () {
		return (
			<ContainerPage>
				<Row gutter={16}>
					<Col className='gutter-row' span={6}>
						<ul>
							<h1>Người dùng</h1>
							<li>
								<Link to='auth/login'>Đăng nhập / Đăng ký / Quên mật khẩu</Link>
							</li>
							<li>
								<Link to='products'>Danh sách sản phẩm</Link>
							</li>
							<li>
								<Link to='cart'>Giỏ hàng</Link>
							</li>
							<li>
								<Link to='order-tracking'>Theo dõi đơn hàng</Link>
							</li>
							<li>
								<Link to='profile'>Hồ sơ</Link>
							</li>
						</ul>
					</Col>

					<Col className='gutter-row' span={6}>
						<ul>
							<h1>Admin</h1>
							<li>
								<Link to='admin/approveprovider'>Duyệt người bán</Link>
							</li>
							<li>
								<Link to='admin/approveshipper'>Duyệt người giao hàng</Link>
							</li>
							<li>
								<Link to='stores'>Danh sách cửa hàng</Link>
							</li>
							<li>
								<Link to='statistical'>Thống kê</Link>
							</li>
						</ul>
					</Col>

					<Col className='gutter-row' span={6}>
						<h1>Shipper</h1>
						<ul>
							<li>
								<Link to='wait-shipper-to-shipping-and-paid'>
									Chấp nhận đơn hàng vận chuyển
								</Link>
							</li>
							<li>
								<Link to='delivery-history'>Lịch sử giao hàng</Link>
							</li>
						</ul>
					</Col>

					<Col className='gutter-row' span={6}>
						<h1>Người bán</h1>
						<ul>
							<li>
								<Link to='store/profile'>Hồ sơ cửa hàng</Link>
							</li>

							<li>
								<Link to='request-shipping'>Gửi yêu cầu vận chuyển</Link>
							</li>
							<li>
								<Link to='order-management'>Quản lý đơn hàng</Link>
							</li>
							<li>
								<Link to='products/61eac75c184abb08cdce2a3c/edit'>Chỉnh sửa sản phẩm</Link>
							</li>
						</ul>
					</Col>
				</Row>
			</ContainerPage>
		);
	}
}

export default HomePage;
