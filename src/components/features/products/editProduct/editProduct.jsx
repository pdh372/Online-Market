import React, { useState } from 'react';
import { Form, Input, Button, DatePicker, Cascader } from 'antd';
import productApi from '../../../../apis/product/index';
import { useNavigate } from 'react-router-dom';

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

const EditProduct = props => {
	const { info } = props;
  const navigate = useNavigate();

	const onFinish = values => {
		const dataForm = {
			Product : {
				id          : values.product.id,
				name        : values.product.name,
				description : values.product.description,
				price       : values.product.price,
				unit        : values.product.unit,
				category    : values.product.category,
				store       : '61d7e6f52a36950cf2312c57',
			},
		};

		console.log(dataForm);
		// productApi.put.editProduct(dataForm.Product).then(res => {
		// 	console.log(res);
		// });
	};

  const handleDeleteProduct = () => {
    const id = document.getElementById('productId').value;
    productApi.deleteApi.deleteProduct(id);
    navigate('/');
  }


	return (
		<Form
			{...layout}
			name='nest-messages'
			onFinish={onFinish}
      initialValues={info}
			validateMessages={validateMessages}
		>
			<h1>
				<center>CHỈNH SỬA SẢN PHẨM</center>
			</h1>
      <Form.Item
				name={[ 'product', 'id' ]}
				label='Id: CHỈ ĐỂ TEST'
				rules={[
					{
						type     : 'string',
						required : true,
					},
				]}
			>
				<Input id='productId' />
			</Form.Item>

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
				<Input placeholder={info.name} />
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
				<Input placeholder={info.description} />
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
				<Input type='number' placeholder={info.price} />
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
				<Input placeholder={info.unit} />
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
				<select defaultValue={info.category}>
					<option />
					<option value='Thịt'>Thịt</option>
					<option value='Cá'>Cá</option>
					<option value='Trứng'>Trứng</option>
					<option value='Rau'>Rau</option>
					<option value='Củ'>Củ</option>
					<option value='Trái cây'>Trái cây</option>
				</select>
			</Form.Item>

			<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 11 }}>
				<Button type='primary' htmlType='submit'>
					Lưu
				</Button>
        <br/>
        <br/>
        <Button type='danger' htmlType='button' onClick={handleDeleteProduct}>
					Xóa
				</Button>
			</Form.Item>
		</Form>
	);
};

export default EditProduct;
