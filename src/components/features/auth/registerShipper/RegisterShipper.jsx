import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Upload, DatePicker } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const layout = {
	labelCol: {
		span: 8,
	},
	wrapperCol: {
		span: 8,
	},
};
/* eslint-disable no-template-curly-in-string */
const normFile = (e) => {
	console.log('Upload event:', e);

	if (Array.isArray(e)) {
		return e;
	}

	return e && e.fileList;
};

const validateMessages = {
	required: '${label} is required!',
	types: {
		email: '${label} is not a valid email!',
		number: '${label} is not a valid number!',
	},
	number: {
		range: '${label} must be between ${min} and ${max}',
	},
	rules: [
		{
			type: 'array',
			required: true,
			message: 'Please select time!',
		},
	],
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
			<h1><center>ĐĂNG KÝ TÀI KHOẢN NGƯỜI GIAO HÀNG</center></h1>
			<p><center>
				<Link to='/auth/login'>Đăng nhập |</Link>
				<Link to='/auth/registercustomer'> Đăng ký khách hàng |</Link>
				<Link to='/auth/registerprovider'> Đăng ký đối tác cung cấp</Link>
			</center></p>
			<h3><center>Điền các thông tin sau đây để đăng ký tài khoản người giao hàng</center></h3>
			<Form.Item
				name={['user', 'name']}
				label='Họ tên'
				rules={[
					{
						required: true,
					},
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name={['user', 'id']}
				label='CCCD/CMND'
				rules={[
					{
						type: 'string',
						required: true,
					},
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name={['user', 'dob']}
				label="Ngày sinh"
				rules={[
					{
						required: true,
					},
				]}>
				<DatePicker />
			</Form.Item>
			<Form.Item
				name={['user', 'phone']}
				label='Số điện thoại'
				rules={[
					{
						type: 'string',
						required: true,
					},
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name={['user', 'email']}
				label='Email'
				rules={[
					{
						type: 'email',
						required: true,
					},
				]}
			>
				<Input />
			</Form.Item>
			<h3><center>Ảnh CMND/CCCD</center></h3>
			<Form.Item
				name="upload"
				label="Mặt trước"
				valuePropName="fileList"
				getValueFromEvent={normFile}
				extra="Mặt trước"
				rules={[
					{
						required: true,
					},
				]}
			>
				<Upload name="front" action="/upload.do" listType="picture">
					<Button icon={<UploadOutlined />}>Click to upload</Button>
				</Upload>
			</Form.Item>
			<Form.Item
				name="upload1"
				label="Mặt sau"
				valuePropName="fileList"
				getValueFromEvent={normFile}
				extra="Mặt sau"
				rules={[
					{
						required: true,
					},
				]}
			>
				<Upload name="backside" action="/upload.do" listType="picture">
					<Button icon={<UploadOutlined />}>Click to upload</Button>
				</Upload>
			</Form.Item>
			<h3><center>Thông tin địa chỉ</center></h3>
			<Form.Item
				name={['user', 'city']}
				label='Thành phố'
				rules={[
					{
						required: true,
					},
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name={['user', 'district']}
				label='Quận'
				rules={[
					{
						required: true,
					},
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name={['user', 'ward']}
				label='Phường'
				rules={[
					{
						required: true,
					},
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name={['user', 'street']}
				label="Đường"
				rules={[
					{
						required: true,
					},
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name={['user', 'number']}
				label="Số nhà"
				rules={[
					{
						required: true,
					},
				]}
			>
				<Input />
			</Form.Item>
			<h3><center>Giấy phép lái xe A1/A2</center></h3>
			<Form.Item
				name="upload2"
				label="Ảnh GPLX mặt trước"
				valuePropName="fileList"
				getValueFromEvent={normFile}
				extra="Mặt trước"
				rules={[
					{
						required: true,
					},
				]}
			>
				<Upload name="license1" action="/upload.do" listType="pdf">
					<Button icon={<UploadOutlined />}>Click to upload</Button>
				</Upload>
			</Form.Item>
			<Form.Item
				name="upload2"
				label="Ảnh GPLX mặt sau"
				valuePropName="fileList"
				getValueFromEvent={normFile}
				extra="Mặt sau"
				rules={[
					{
						required: true,
					},
				]}
			>
				<Upload name="license2" action="/upload.do" listType="pdf">
					<Button icon={<UploadOutlined />}>Click to upload</Button>
				</Upload>
			</Form.Item>
			<h3><center>Thiết lập mật khẩu</center></h3>
			<Form.Item
				name={['pass']}
				label="Mật khẩu"
				rules={[
					{
						required: true,
						message: 'Please input your password!',
					},
				]}
				hasFeedback
			>
				<Input.Password />
			</Form.Item>
			<Form.Item
				name="confirm"
				label="Xác nhận mật khẩu"
				dependencies={['pass']}
				hasFeedback
				rules={[
					{
						required: true,
						message: 'Please confirm your password!',
					},
					({ getFieldValue }) => ({
						validator(_, value) {
							if (!value || getFieldValue('pass') === value) {
								return Promise.resolve();
							}

							return Promise.reject(new Error('The two passwords that you entered do not match!'));
						},
					}),
				]}
			>
				<Input.Password />
			</Form.Item>
			<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 11 }}>
				<Button type='primary' htmlType='submit'>
					Đăng ký
				</Button>
			</Form.Item>
		</Form>
	);
};

export default RegisterProvider;
