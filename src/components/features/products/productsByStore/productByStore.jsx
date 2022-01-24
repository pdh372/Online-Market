import React from 'react';
import { Link } from 'react-router-dom';
import { Pagination } from 'antd';

const ProductsByStore = props => {
	const { products } = props;

	const renderProduct = () => {
		return products.map(product => {
			return (
				<div className='box' key={product._id}>
					<div>
						<img width='180px' height='180px' src={product.image} alt='img' />
						<h4>
							<Link to={`/products/${product._id}`}>{product.name}</Link>
						</h4>
						<p>
							Giá: {product.price.toLocaleString()} VNĐ/{product.unit}
						</p>
					</div>
				</div>
			);
		});
	};

	return (
		<React.Fragment>
			<div className='list'>{products && renderProduct()}</div>
			<div className='list'>
				<Pagination defaultCurrent={1} total={50} />
			</div>
		</React.Fragment>
	);
};

export default ProductsByStore;
