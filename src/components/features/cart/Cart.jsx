import React from 'react';
import ProductList from './productList/ProductList';
import Summary from './summary/Summary';
import { useNavigate } from 'react-router-dom';
import './index.scss';

const PRODUCTS = [
	{
		image       : 'https://via.placeholder.com/200x150',
		name        : 'Rau',
		description : 'Rau siêu sạch',
		price       : 60000.0,
		quantity    : 2,
	},
	{
		image       : 'https://via.placeholder.com/200x150',
		name        : 'Thịt',
		description : 'Thịt ăn bao phê',
		price       : 100000.0,
		quantity    : 1,
	},
];

const Cart = () => {
	const navigate = useNavigate();
	const CLONE_PRODUCTS = JSON.parse(JSON.stringify(PRODUCTS));
	const [ products, setProducts ] = React.useState(CLONE_PRODUCTS);

	const subTotal = products.reduce((total, product) => {
		return total + product.price * +product.quantity;
	}, 0);

	const onChangeProductQuantity = (index, event) => {
		const value = event.target.value;
		const valueInt = parseInt(value);
		const cloneProducts = [ ...products ];

		if (value === '') {
			cloneProducts[index].quantity = value;
		}
		else if (valueInt > 0) {
			cloneProducts[index].quantity = valueInt;
		}
		setProducts(cloneProducts);
	};

	const onRemoveProduct = i => {
		const filteredProduct = products.filter((product, index) => {
			return index !== i;
		});

		setProducts(filteredProduct);
	};

	const handleBackToProductPage = () => {
		navigate('/products');
	};

	return (
		<div className='cart'>
			{products.length > 0 ? (
				<div>
					<ProductList
						products={products}
						onChangeProductQuantity={onChangeProductQuantity}
						onRemoveProduct={onRemoveProduct}
					/>

					<Summary subTotal={subTotal} />
				</div>
			) : (
				<div className='empty-product'>
					<h3>Không có sản phẩm nào cả.</h3>
					<button onClick={handleBackToProductPage}>Mua Sắm Ngay</button>
				</div>
			)}
		</div>
	);
};

export default Cart;
