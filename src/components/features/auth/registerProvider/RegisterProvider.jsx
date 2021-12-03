import React from 'react';

import { Form, Input, Button } from 'antd';
const layout = {
	labelCol   : {
		span : 8,
	},
	wrapperCol : {
		span : 16,
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
/* eslint-enable no-template-curly-in-string */

const RegisterProvider = () => {
	const onFinish = values => {
		console.log(values);
	};

	return (
		<Form
			{...layout}
			name='nest-messages'
			onFinish={onFinish}
			validateMessages={validateMessages}
		>
			<Form.Item>
				<h1 justify-content='center'>ĐĂNG KÝ TÀI KHOẢN</h1>
			</Form.Item>
			<Form.Item>
				<p>Điền các thông tin sau đây để đăng ký tài khoản nhà cung cấp</p>
			</Form.Item>
			<Form.Item
				name={[ 'user', 'name' ]}
				label='Họ và tên'
				rules={[
					{
						required : true,
					},
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name={[ 'user', 'id' ]}
				label='CCCD/CMND'
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
				name={[ 'user', 'phone' ]}
				label='Số điện thoại'
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
				name={[ 'user', 'email' ]}
				label='Email'
				rules={[
					{
						type     : 'email',
						required : true,
					},
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name={[ 'user', 'city' ]}
				label='Thành phố'
				rules={[
					{
						required : true,
					},
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name={[ 'user', 'districy' ]}
				label='Quận'
				rules={[
					{
						required : true,
					},
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name={[ 'user', 'ward' ]}
				label='Phường'
				rules={[
					{
						required : true,
					},
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name={[ 'user', 'street' ]}
				label='Số nhà, Đường'
				rules={[
					{
						required : true,
					},
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name={[ 'user', 'pass' ]}
				label='Mật khẩu'
				rules={[
					{
						required : true,
					},
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name={[ 'user', 're-pass' ]}
				label='Xác nhận mật khẩu'
				rules={[
					{
						required : true,
					},
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
				<Button type='primary' htmlType='submit'>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default RegisterProvider;
