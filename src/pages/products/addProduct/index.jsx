import React from 'react';
import ContainerPage from 'components/shared/containerPage/ContainerPage';
import AddProduct from 'components/features/products/addProduct/addProduct';

const AddProductPage = () => {
	return (
		<React.Fragment>
			<ContainerPage>
				<AddProduct />
			</ContainerPage>
		</React.Fragment>
	);
};

export default AddProductPage;
