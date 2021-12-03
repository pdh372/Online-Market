import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';

const Login = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 24,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <h1 justify-content='center'>ĐĂNG NHẬP</h1>
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Mật khẩu"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>

                    <Button type="primary" htmlType="submit">Đăng nhập</Button>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <p>
                        <Link to='/auth/forgetpassword'>Quên mật khẩu</Link>
                    </p>
                    <p>Bạn chưa có tài khoản?
                        <p>
                            <Link to='/auth/registercustomer'>Đăng ký ngay |</Link>
                            <Link to='/auth/registerprovider'> Đăng ký đối tác cung cấp |</Link>
                            <Link to='/auth/registershipper'> Đăng ký đối tác giao hàng</Link>
                        </p>
                    </p>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;