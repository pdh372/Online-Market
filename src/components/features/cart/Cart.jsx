import React from 'react';
import ProductList from './productList/ProductList';
import Summary from './summary/Summary';
import { useNavigate } from 'react-router-dom';
import './index.scss';

const Cart = () => {
	const navigate = useNavigate();
	const CLONE_PRODUCTS = JSON.parse(localStorage.getItem('cart') || '[]');
	const [ products, setProducts ] = React.useState(CLONE_PRODUCTS);

	const subTotal = products.reduce((total, product) => {
		if (product.quantity === 0) {
			return total + product.price * 1;
		}

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

	const onRemoveProduct = (i, _id) => {
		const filteredProduct = products.filter((product, index) => {
			return index !== i;
		});

		setProducts(filteredProduct);

		removeFromLocalStorage(_id);
	};

	const removeFromLocalStorage = _id => {
		const cart = localStorage.getItem('cart');
		const products = JSON.parse(cart);
		const newProduct = products.filter(p => p._id !== _id);
		localStorage.setItem('cart', JSON.stringify(newProduct));
	};

	const handleBackToProductPage = () => {
		navigate('/products');
	};

	return (
		<div className='cart-huy'>
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
