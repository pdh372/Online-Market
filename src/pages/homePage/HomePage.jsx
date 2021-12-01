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
				</li>
			</div>
		);
	}
}

export default HomePage;
