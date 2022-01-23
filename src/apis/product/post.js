import axiosJava from '../rootJava';
import axiosDotNet from '../rootDotNet';

class Post {
	addProduct = data => {
		return axiosJava.post('products', data, {
			headers : {
				'x-auth-token' : 'token',
			},
		});
	};

	changeOrigin = async ({ productId, image }) => {
		return await axiosDotNet.post('product/changeProductOrigin', { image, productId });
	};
}

export default new Post();
