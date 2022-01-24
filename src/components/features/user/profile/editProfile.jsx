import React from 'react';
import { Form, Input, Button, DatePicker, Cascader } from 'antd';
import userApi from 'apis/user';

//const { Option } = Select;
const residences = [
	{
		value    : 'TP Hồ Chí Minh',
		label    : 'TP Hồ Chí Minh',
		children : [
			{
				value    : 'Quận 1',
				label    : 'Quận 1',
				children : [
					{
						value : 'Phường Bến Nghé',
						label : 'Phường Bến Nghé',
					},
					{
						value : 'Phường Bến Thành',
						label : 'Phường Bến Thành',
					},
				],
			},
			{
				value    : 'Quận 2',
				label    : 'Quận 2',
				children : [
					{
						value : 'Phường',
						label : 'Phường',
					},
				],
			},
			{
				value    : 'Quận 3',
				label    : 'Quận 3',
				children : [
					{
						value : 'Phường',
						label : 'Phường',
					},
				],
			},
			{
				value    : 'Quận 4',
				label    : 'Quận 4',
				children : [
					{
						value : 'Phường',
						label : 'Phường',
					},
				],
			},
			{
				value    : 'Quận 5',
				label    : 'Quận 5',
				children : [
					{
						value : 'Phường',
						label : 'Phường',
					},
				],
			},
		],
	},
];
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

const EditProfile = (props) => {
	//const userId = get from jwt;
  const { info } = props;

	const onFinish = values => {
		const dataForm = {
			User : {
				ObjectId    : '61e6c302071c4a6bdb501b7a',
				Name        : values.user.name,
				CINum       : values.user.id,
				DoB         : values.user.dob.format('DD-MM-YYYY'),
				PhoneNumber : values.user.phone,
				Address     : {
					StreetNo : values.user.number + ' ' + values.user.street,
				},
			},
			Area : {
				City     : values.user.residence[0],
				District : values.user.residence[1],
				Ward     : values.user.residence[2],
			},
		};

		console.log(dataForm);
		userApi.put.user(dataForm);
    window.location.href='/profile';
	};

	return (
		<Form
			{...layout}
			name='nest-messages'
			onFinish={onFinish}
			validateMessages={validateMessages}
      initialValues={info}
		>
			<h1>
				<center>CHỈNH SỬA TÀI KHOẢN</center>
			</h1>

			<Form.Item
				name={[ 'user', 'name' ]}
				label='Họ và tên'
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
				name={[ 'user', 'id' ]}
				label='CCCD/CMND'
				rules={[
					{
						type     : 'string',
						required : true,
					},
				]}
			>
				<Input placeholder={info.ciNum}/>
			</Form.Item>
			<Form.Item
				name={[ 'user', 'dob' ]}
				label='Ngày sinh'
				rules={[
					{
						required : true,
					},
				]}
			>
				<DatePicker placeholder={info.dob} />
			</Form.Item>
			<Form.Item
				name={[ 'user', 'phone' ]}
				label='Số điện thoại'
				rules={[
					{
						required : true,
					},
				]}
			>
				<Input placeholder={info.phoneNumber} />
			</Form.Item>

			<h3>
				<center>Thông tin địa chỉ giao hàng</center>
			</h3>
			<Form.Item
				name={[ 'user', 'residence' ]}
				label='Địa chỉ'
				rules={[
					{
						type     : 'array',
						required : true,
						message  : 'Please select your habitual residence!',
					},
				]}
			>
				<Cascader options={residences} />
			</Form.Item>
			<Form.Item
				name={[ 'user', 'street' ]}
				label='Đường'
				rules={[
					{
						required : true,
					},
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name={[ 'user', 'number' ]}
				label='Số nhà'
				rules={[
					{
						required : true,
					},
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 11 }}>
				<Button type='primary' htmlType='submit'>
					Lưu
				</Button>
			</Form.Item>
		</Form>
	);
};

export default EditProfile;
