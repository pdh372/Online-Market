import React, { useEffect, useState } from 'react';
import { Form, Input } from 'antd';
// import orderApi from '../../../../../apis/order/index';
import productApi from '../../../../../apis/product/index';

const EditProfile = () => {
	const [ products, setProducts ] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const data = await productApi.get.getProductByStore('61d7e6f52a36950cf2312c57');

			setProducts(data);
		};

		getData();
	}, []);

	return (
		<article>
			<section>
				{products.map(p => (
					<Form name='basic' autoComplete='off' layout='vertical' style={{ marginBottom: '100px' }}>
						<Form.Item label={'Nguồn Gốc Sản Phẩm Của Sản Phẩm XXX'} name='productOrigin'>
							<Input placeholder='Nguồn Gốc Sản Phẩm' type='file' />
						</Form.Item>
						{p.image && <img src={p.image} alt='img' style={{ maxWidth: '100px', minWidth: '100px' }} />}
						<Form.Item>
							<button className='' type='submit'>
								Cập Nhật
							</button>
						</Form.Item>
					</Form>
				))}
			</section>
		</article>
	);
};

export default EditProfile;
