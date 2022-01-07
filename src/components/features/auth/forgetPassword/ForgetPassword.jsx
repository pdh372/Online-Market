import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button, DatePicker } from 'antd';
import apiUser from 'apis/user';
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
            name: values.user.name,
            ciNum: values.user.id,
            email: values.user.email,
            dob: values.user.dob.format('DD-MM-YYYY'),
            phoneNumber: values.user.phone,
            password: values.pass,
        }
        console.log(dataForm);
        apiUser.put.forgetPassword(dataForm).then(res => {
            console.log(res);
            alert(res);
        });
    };

    return (
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <h1><center>QUÊN MẬT KHẨU</center></h1>
            <p><center>
                <Link to='/auth/login'>Đăng nhập |</Link>
				<Link to='/auth/registercustomer'> Đăng ký khách hàng |</Link>
                <Link to='/auth/registerprovider'> Đăng ký nhà cung cấp |</Link>
                <Link to='/auth/registershipper'> Đăng ký đối tác giao hàng</Link>
            </center></p>
            <h3><center>Nhập chính xác các thông tin về tài khoản của bạn</center></h3>
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
                        required: true,
                    },
                ]}>
                <DatePicker format={'DD/MM/YYYY'}/>
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
            <h3><center>Thiết lập lại mật khẩu</center></h3>
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
                    Xác nhận
                </Button>
            </Form.Item>
        </Form>
    );
};


export default RegisterCustomer;