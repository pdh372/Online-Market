import React, { useEffect, useState } from 'react';
import { Form, Input } from 'antd';
// import orderApi from '../../../../../apis/order/index';
import productApi from '../../../../../apis/product/index';

const EditProfile = () => {
	const [ products, setProducts ] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const data = await productApi.get.getProductByStore('61d7e6f52a36950cf2312c57');
			console.log(data);
			setProducts(data);
		};

		getData();
	}, []);

	const handleChangeImage = async (productId, e) => {
		let file = e.target.files[0];

		let reader = new FileReader();
		reader.readAsDataURL(file);

		reader.onloadend = async function () {
			if (reader.result) {
				console.log({ productId, image: reader.result });
				const res = await productApi.post.changeOrigin({ productId, image: reader.result });

				const index = products.findIndex(p => p._id === productId);
				console.log(index);
				const newProducts = [ ...products ];

				newProducts[index].productOrigin = res;
				setProducts(newProducts);
			}
		};
	};

	return (
		<article>
			<section>
				{products.map((p, index) => (
					<Form
						key={index}
						name='basic'
						autoComplete='off'
						layout='vertical'
						style={{ marginBottom: '100px' }}
					>
						<Form.Item label={'Nguồn Gốc Sản Phẩm Của Sản Phẩm' + p.name} name='productOrigin'>
							<Input
								placeholder='Nguồn Gốc Sản Phẩm'
								type='file'
								onChange={e => handleChangeImage(p._id, e)}
							/>
						</Form.Item>
						{p.productOrigin && (
							<img src={p.productOrigin} alt='img' style={{ maxWidth: '100px', minWidth: '100px' }} />
						)}
						{/* <Form.Item>
							<button className='' type='submit'>
								Cập Nhật
							</button>
						</Form.Item> */}
					</Form>
				))}
			</section>
		</article>
	);
};

export default EditProfile;
