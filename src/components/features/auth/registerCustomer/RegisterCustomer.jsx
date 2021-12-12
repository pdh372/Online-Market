import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import Post from '../../../../apis/user/post'
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 8,
    },
};

/* eslint-disable no-template-curly-in-string */

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */



const RegisterCustomer = () => {
    const onFinish = (values) => {
        const dataForm = {
            Name: values.user.name,
            CINumber: values.user.id,
            Email: values.user.email,
            DoB: values.user.dob,
            PhoneNumber: values.user.phone,
            Password: values.pass,
            Address:
            {
                City: values.user.city,
                District: values.user.district,
                Ward: values.user.ward,
                Street: values.user.street,
                Number: values.user.number
            }
        }

        Post.registerCustomer(dataForm).then(res => {
            console.log(res);
            alert(res);
        });
    };

    return (
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <h1><center>ĐĂNG KÝ TÀI KHOẢN</center></h1>
                <p><center>
					<Link to='/auth/login'>Đăng nhập |</Link>
					<Link to='/auth/registercustomer'> Đăng ký khách hàng |</Link>
					<Link to='/auth/registershipper'> Đăng ký đối tác giao hàng</Link>
                    </center></p>
                <p><center>Điền các thông tin sau đây để đăng ký tài khoản khách hàng</center></p>
            <Form.Item
                name={['user', 'name']}
                label="Họ và tên"
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
                name={['user', 'id']}
                label="CCCD/CMND"
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
                        type: 'date',
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['user', 'phone']}
                label="Số điện thoại"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['user', 'email']}
                label="Email"
                rules={[
                    {
                        type: 'email',
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['user', 'city']}
                label="Thành phố"
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
                label="Quận"
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
                label="Phường"
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
                <Button type="primary" htmlType="submit">
                Đăng ký
                </Button>
            </Form.Item>
        </Form>
    );
};


export default RegisterCustomer;