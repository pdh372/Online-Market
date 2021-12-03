import React from 'react';
import { Link } from 'react-router-dom';
import './homePage.scss';

class HomePage extends React.Component {
	render () {
		return (
			<div className='huy'>
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
				</li>
			</div>
		);
	}
}

export default HomePage;
