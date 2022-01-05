import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const ContainerPage = ({ children }) => {
	return (
		<React.Fragment>
			<Header />

			{children}

			<Footer />
		</React.Fragment>
	);
};

export default ContainerPage;
