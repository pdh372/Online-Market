import rootApi from '../rootJava';

class Get {
	user = type => {
		return rootApi.get('statisticals/' + type);
	};
}

export default new Get();
