import React from 'react';
import { Link } from 'react-router-dom';
import ContainerPage from '../components/shared/containerPage/ContainerPage';
import './homePage.scss';

class HomePage extends React.Component {
	render () {
		return (
			<ContainerPage>
				<div className='xxx'>
					<li>
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
					</li>
				</div>
			</ContainerPage>
		);
	}
}

export default HomePage;
