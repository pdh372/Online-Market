import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import productApi from '../../../../apis/product/index';

const layout = {
	labelCol   : {
		span : 8,
	},
	wrapperCol : {
		span : 8,
	},
};

/* eslint-disable no-template-curly-in-string */

const validateMessages = {
	required : '${label} is required!',
	types    : {
		email  : '${label} is not a valid email!',
		number : '${label} is not a valid number!',
	},
	number   : {
		range : '${label} must be between ${min} and ${max}',
	},
};

const AddProduct = () => {
	const [ productImage, setProductImage ] = useState(null);
	const navigate = useNavigate();

	const handleAddImage = e => {
		const file = e.target.files[0];

		const reader = new FileReader();
		reader.readAsDataURL(file);

		reader.onloadend = function () {
			if (reader.result) {
				setProductImage(reader.result);
			}
		};
	};

	const onFinish = values => {
		const dataForm = {
			Product : {
				name        : values.product.name,
				description : values.product.description,
				image       : productImage,
				price       : values.product.price,
				unit        : values.product.unit,
				category    : values.product.category,
				store       : '61d7e6f52a36950cf2312c57',
			},
		};

		console.log(dataForm);
		productApi.post.addProduct(dataForm.Product).then(res => {
			console.log(res);
		});
		navigate('/');
	};

	return (
		<Form {...layout} name='nest-messages' onFinish={onFinish} validateMessages={validateMessages}>
			<h1>
				<center>THÊM SẢN PHẨM MỚI</center>
			</h1>

			<Form.Item
				name={[ 'product', 'name' ]}
				label='Tên sản phẩm'
				rules={[
					{
						type     : 'string',
						required : true,
					},
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				name={[ 'product', 'description' ]}
				label='Mô tả'
				rules={[
					{
						type     : 'string',
						required : true,
					},
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				name={[ 'product', 'price' ]}
				label='Đơn giá'
				rules={[
					{
						required : true,
					},
				]}
			>
				<Input type='number' />
			</Form.Item>

			<Form.Item
				name={[ 'product', 'unit' ]}
				label='Đơn vị tính'
				rules={[
					{
						type     : 'string',
						required : true,
					},
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				name={[ 'product', 'category' ]}
				label='Loại'
				rules={[
					{
						required : true,
					},
				]}
			>
				<select>
					<option />
					<option value='Thịt'>Thịt</option>
					<option value='Cá'>Cá</option>
					<option value='Trứng'>Trứng</option>
					<option value='Rau'>Rau</option>
					<option value='Củ'>Củ</option>
					<option value='Trái cây'>Trái cây</option>
				</select>
			</Form.Item>

			<Form.Item
				name={[ 'product', 'image' ]}
				label='Hình ảnh'
				rules={[
					{
						required : true,
					},
				]}
			>
				<Input type='file' onChange={e => handleAddImage(e)} />
			</Form.Item>

			<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 11 }}>
				<Button type='primary' htmlType='submit'>
					Thêm
				</Button>
			</Form.Item>
		</Form>
	);
};

export default AddProduct;
