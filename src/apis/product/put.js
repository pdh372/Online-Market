import axiosJava from '../rootJava'

class Put {
  editProduct = (data) => {
    return axiosJava.post('products/' + data.id, data, {
      headers : {
				'x-auth-token' : 'token',
      },
    });
  }

}

export default new Put();