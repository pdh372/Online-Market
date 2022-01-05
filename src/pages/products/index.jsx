import ContainerPage from 'components/shared/containerPage/ContainerPage';
import Products from '../../components/features/products/Products';

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