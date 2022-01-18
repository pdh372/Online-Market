import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button,  DatePicker, Cascader } from 'antd';
//import { UploadOutlined } from '@ant-design/icons';
import apiUser from 'apis/user';

const residences = [
    {
        value: 'TP Hồ Chí Minh',
        label: 'TP Hồ Chí Minh',
        children: [
            {
                value: 'Quận 1',
                label: 'Quận 1',
                children: [
                    {
                        value: 'Phường Bến Nghé',
                        label: 'Phường Bến Nghé',
                    },
                    {
                        value: 'Phường Bến Thành',
                        label: 'Phường Bến Thành',
                    },
                ],
            },
            {
                value: 'Quận 2',
                label: 'Quận 2',
                children: [
                    {
                        value: 'Phường',
                        label: 'Phường',
                    },
                ],
            },
            {
                value: 'Quận 3',
                label: 'Quận 3',
                children: [
                    {
                        value: 'Phường',
                        label: 'Phường',
                    },
                ],
            },
            {
                value: 'Quận 4',
                label: 'Quận 4',
                children: [
                    {
                        value: 'Phường',
                        label: 'Phường',
                    },
                ],
            },
            {
                value: 'Quận 5',
                label: 'Quận 5',
                children: [
                    {
                        value: 'Phường',
                        label: 'Phường',
                    },
                ],
            },
        ],
    },
];


const layout = {
	labelCol: {
		span: 8,
	},
	wrapperCol: {
		span: 8,
	},
};
/* eslint-disable no-template-curly-in-string */
// const normFile = (e) => {
// 	console.log('Upload event:', e);

// 	if (Array.isArray(e)) {
// 		return e;
// 	}

// 	return e && e.fileList;
// };

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
	const [CMNDTruoc, setCMNDTruoc] = useState("");
	const [CMNDSau, setCMNDSau] = useState("");
	const [GiayPhepTruoc, setGiayPhepTruoc] = useState("");
	const [GiayPhepSau, setGiayPhepSau] = useState("");

	const handleChangeFile1 = (e) => {
		let file = e.target.files[0];
	
		let reader = new FileReader();
		reader.readAsDataURL(file);
	
		reader.onloadend = function () {
			if (reader.result) {
				setCMNDTruoc(reader.result)
			}
		};
	};

	const handleChangeFile2 = (e) => {
		let file = e.target.files[0];
	
		let reader = new FileReader();
		reader.readAsDataURL(file);
	
		reader.onloadend = function () {
			if (reader.result) {
				setCMNDSau(reader.result)
			}
		};
	};

	const handleChangeFile3 = (e) => {
		let file = e.target.files[0];
	
		let reader = new FileReader();
		reader.readAsDataURL(file);
	
		reader.onloadend = function () {
			if (reader.result) {
				setGiayPhepTruoc(reader.result)
			}
		};
	};

	const handleChangeFile4 = (e) => {
		let file = e.target.files[0];
	
		let reader = new FileReader();
		reader.readAsDataURL(file);
	
		reader.onloadend = function () {
			if (reader.result) {
				setGiayPhepSau(reader.result)
			}
		};
	};

	const onFinish = values => {
		const dataForm = {
			user: {
				name: values.user.name,
				ciNum: values.user.id,
				email: values.user.email,
				dob: values.user.dob.format('DD-MM-YYYY'),
				phoneNumber: values.user.phone,
				password: values.pass,
				address:
                {
                    streetNo: values.user.number + ' ' + values.user.street,
                }
			},
			area:{
				city: values.user.residence[0],
				district: values.user.residence[1],
				ward: values.user.residence[2],		
			},
			shipper:{
				status: "absent",
				
			},
			imgCI:{
				front: CMNDTruoc,
				backside: CMNDSau,
			},
			imgLicense:{
				front: GiayPhepTruoc,
				backside: GiayPhepSau,
			}
		}
		console.log(dataForm);
		apiUser.post.registerShipper(dataForm).then(res => {           
			console.log(res);
            alert(res);
        });
	};

	return (
		<Form
			{...layout}
			name='nest-messages'
			onFinish={onFinish}
			validateMessages={validateMessages}
		>
			<h1><center>ĐĂNG KÝ TÀI KHOẢN NGƯỜI GIAO HÀNG</center></h1>
			<center>
				<Link to='/auth/login'>Đăng nhập |</Link>
				<Link to='/auth/registercustomer'> Đăng ký khách hàng |</Link>
				<Link to='/auth/registerprovider'> Đăng ký đối tác cung cấp</Link>
			</center>
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
				<DatePicker format={'DD/MM/YYYY'}/>
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
				label="Mặt trước"
				extra="Mặt trước"
				rules={[
					{
						required: true,
					},
				]}>
				<Input required={true} type="file" onChange={(e) => handleChangeFile1(e)} /> 
			</Form.Item>
			<Form.Item 
				label="Mặt sau"
				extra="Mặt sau"
				rules={[
					{
						required: true,
					},
				]}>
				<Input required={true} type="file" onChange={(e) => handleChangeFile2(e)} /> 
			</Form.Item>
			{/* <Form.Item
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
				name="upload"
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
			</Form.Item> */}
			<h3><center>Thông tin địa chỉ</center></h3>
			<Form.Item
				name={['user', 'residence']}
				label="Địa chỉ"
				rules={[
					{
						type: 'array',
						required: true,
						message: 'Please select your habitual residence!',
					},
				]}
			>
				<Cascader options={residences} />
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
				label="Ảnh GPLX mặt trước"
				extra="Mặt trước"
				rules={[
					{
						required: true,
					},
				]}>
				<Input required={true} type="file" onChange={(e) => handleChangeFile3(e)} /> 
			</Form.Item>
			<Form.Item 
				label="Ảnh GPLX mặt sau"
				extra="Mặt sau"
				rules={[
					{
						required: true,
					},
				]}>
				<Input required={true} type="file" onChange={(e) => handleChangeFile4(e)} /> 
			</Form.Item>
			{/* <Form.Item
				name="upload"
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
				name="upload"
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
			</Form.Item> */}
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
