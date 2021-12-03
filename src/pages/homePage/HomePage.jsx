import React from 'react';
import { Link } from 'react-router-dom';
import './homePage.scss';

class HomePage extends React.Component {
	render () {
		return <div className='huy'><a href='http://localhost:3000/auth/login'>login</a></div>;
	}
}

export default HomePage;
