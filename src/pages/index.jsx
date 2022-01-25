import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import ContainerPage from '../components/shared/containerPage/ContainerPage';

class HomePage extends React.Component {
	render() {
		return (
			<ContainerPage>
				<Row gutter={16}>
					<Col className='gutter-row' span={6}>
						<ul>
							<h1>Người dùng</h1>
							<li>
								<Link to='auth/login'>login</Link>
							</li>
							<li>
								<Link to='admin/approveprovider'>admin/approveprovider</Link>
							</li>
							<li>
								<Link to='admin/approveshipper'>admin/approveshipper</Link>
							</li>
						</ul>

						<li>
							<Link to='products/add'>add product</Link>
						</li>
						<li>
							<Link to='products/61eacf1dc271d47dee60ab36/edit'>
								edit product
							</Link>
						</li>
						<li>
							<Link to='products'>products</Link>
						</li>
						<li>
							<Link to='cart'>cart</Link>
						</li>
						<li>
							<Link to='products/by-store'>products by store</Link>
						</li>
						<li>
							<Link to='order-tracking'>order tracking</Link>
						</li>
						<li>
							<Link to='wait-shipper-to-shipping-and-paid'>
								waitShipperToShippingAndPaid
							</Link>
						</li>
						<li>
							<Link to='order-management'>order-management</Link>
						</li>
						<li>
							<Link to='request-shipping'>request-shipping</Link>
						</li>
						<li>
							<Link to='/orders/61ebbec7a75a903f85b3869f'>order detail</Link>
						</li>
						<li>
							<Link to='cancel-order'>cancel-order</Link>
						</li>
						<li>
							<Link to='statistical'>statistical</Link>
						</li>
						<li>
							<Link to='delivery-history'>delivery-history</Link>
						</li>
					</Col>
					<Col className='gutter-row' span={6}>
						<ul>
							<li>
								<Link to='store/profile'>quan li ho so cua hang</Link>
							</li>

							<li>
								<Link to='profile'>profile</Link>
							</li>
							<li>
								<Link to='stores'>stores list</Link>
							</li>
						</ul>
					</Col>
				</Row>
			</ContainerPage>
		);
	}
}

export default HomePage;
