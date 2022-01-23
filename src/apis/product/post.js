import axiosJava from '../rootJava'

class Post {
  addProduct = (data) => {
    return axiosJava.post('products', data, {
      headers : {
				'x-auth-token' : 'token',
      },
    });
  }

}

export default new Post();