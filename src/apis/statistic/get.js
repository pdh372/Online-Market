import rootApi from '../rootJava';

class Get {
	user = () => {
		return rootApi.get('statisticals/users');
	};
}

export default new Get();
