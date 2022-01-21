//import { useParams, Navigate } from 'react-router-dom';
import ContainerPage from 'components/shared/containerPage/ContainerPage';
import Products from '../../components/features/products/Products';
//import ProductDetail from '../../components/features/productDetail/ProductDetail';

const ProductsPage = () => {
	return (
		<ContainerPage>
			<main className='product-page'>
				<Products />
			</main>
		</ContainerPage>
	);
};

export default ProductsPage;