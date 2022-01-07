//import { useParams, Navigate } from 'react-router-dom';
import ContainerPage from 'components/shared/containerPage/ContainerPage';
import ProductDetail from '../../components/features/productDetail/ProductDetail';

const ProductDetailPage = () => {
    return (
		<ContainerPage>
			<main className='product-page'>
				<ProductDetail />
			</main>
		</ContainerPage>
	);
};

export default ProductDetailPage;