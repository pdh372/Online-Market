import axiosJava from '../rootJava'

class Get {
	getProductByKeyWord = async (keyword) => {
		return await axiosJava.get('/search/' + keyword);
	}
}

export default new Get();