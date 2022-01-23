import React, { useEffect, useState } from 'react';
import { Form, Input } from 'antd';
import orderApi from '../../../../../apis/order/index';
const EditProfile = () => {
	const [ images ] = useState({
		license       : '',
		foodSafety    : '',
		productOrigin : '',
	});

	useEffect(() => {
		const getData = async () => {
			const store = await orderApi.get.getById({ storeId: '61e6c44d8468206c684f0364' });

			console.log(store);
		};

		getData();
	}, []);

	return (
		<article>
			<section>
				<Form name='basic' autoComplete='off' layout='vertical'>
					<Form.Item label='Giấy Phép Kinh Doanh' name='license'>
						<Input placeholder='Giấy Phép Kinh Doanh' type='file' />
					</Form.Item>
					{images.license && <img src={images.license} alt='img' />}
					<Form.Item>
						<button className='' type='submit'>
							Cập Nhật
						</button>
					</Form.Item>
				</Form>

				<Form name='basic' autoComplete='off' layout='vertical'>
					<Form.Item label='Chứng Nhận An Toàn Thực Phẩm' name='foodSafety'>
						<Input placeholder='Chứng Nhận An Toàn Thực Phẩm' type='file' />
					</Form.Item>
					{images.foodSafety && <img src={images.foodSafety} alt='img' />}
					<Form.Item>
						<button className='' type='submit'>
							Cập Nhật
						</button>
					</Form.Item>
				</Form>

				<Form name='basic' autoComplete='off' layout='vertical'>
					<Form.Item label='Nguồn Gốc Sản Phẩm' name='productOrigin'>
						<Input placeholder='Nguồn Gốc Sản Phẩm' type='file' />
					</Form.Item>
					{images.productOrigin && <img src={images.productOrigin} alt='img' />}
					<Form.Item>
						<button className='' type='submit'>
							Cập Nhật
						</button>
					</Form.Item>
				</Form>
			</section>
		</article>
	);
};

export default EditProfile;
