import React from 'react';
import { Link } from 'react-router-dom';
import ContainerPage from '../components/shared/containerPage/ContainerPage';
import './homePage.scss';

class HomePage extends React.Component {
	render() {
		return (
			<ContainerPage>
				<div>
					<li>
						<ul>
							<Link to='products'>products</Link>
						</ul>
						<ul>
							<Link to='admin/approveprovider'>admin/approveprovider</Link>
						</ul>
						<ul>
							<Link to='admin/approveshipper'>admin/approveshipper</Link>
						</ul>
						<ul>
							<Link to='cancel-order'>cancel-order</Link>
						</ul>
						<ul>
							<Link to='statistical'>statistical</Link>
						</ul>
						<ul>
							<Link to='delivery-history'>delivery-history</Link>
						</ul>
						<ul>
							<Link to='order-tracking'>order tracking</Link>
						</ul>
						<ul>
							<Link to='auth/login'>login</Link>
						</ul>
						<ul>
							<Link to='order-management'>order-management</Link>
						</ul>
						<ul>
							<Link to='store/profile'>quan li ho so cua hang</Link>
						</ul>
						<ul>
							<Link to='cart'>cart</Link>
						</ul>
						<ul>
							<Link to='request-shipping'>request-shipping</Link>
						</ul>
					</li>
				</div>
			</ContainerPage>
		);
	}
}

export default HomePage;
