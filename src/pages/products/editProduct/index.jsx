import React, { useState, useEffect } from 'react';

import ContainerPage from 'components/shared/containerPage/ContainerPage';
import EditProduct from 'components/features/products/editProduct/editProduct';

import productApi from 'apis/product';
import { useParams } from 'react-router-dom';

const EditProductPage = () => {
	const { productId } = useParams();
	const [ product, setProduct ] = useState(null);
	const [ isLoading, setIsLoading ] = useState(true);

	useEffect(async () => {
		const getProduct = async id => {
			const productsData = await productApi.get.getProductById(id);
			setProduct(productsData[0]);
		};

		//await getProduct('61d7e6f52a36950cf2312c57');
		console.log(productId);

		const tempProduct = {
			name        : 'Thịt ba chỉ heo',
			description : 'Thịt heo ngon bổ dưỡng',
			price       : 25000,
			unit        : 'kg',
			category    : 'Cá',
			store       : '61d7e6f52a36950cf2312c57',
		};

		setProduct(tempProduct);
		setIsLoading(false);
	}, []);

	if (isLoading) {
		return (
			<React.Fragment>
				<ContainerPage>
					<p>loading...</p>
				</ContainerPage>
			</React.Fragment>
		);
	}
	else {
		return (
			<React.Fragment>
				<ContainerPage>
					<EditProduct info={product} />
				</ContainerPage>
			</React.Fragment>
		);
	}
};

export default EditProductPage;
