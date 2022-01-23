//import axiosDotNet from '../rootDotNet';
import axiosJava from '../rootJava'

class Delete {
	deleteProduct = async (id) => {
		return await axiosJava.delete('/products/' + id);
	};
}

export default new Delete();