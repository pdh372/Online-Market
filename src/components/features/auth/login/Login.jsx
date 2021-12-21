import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import Post from '../../../../apis/user/post';

const Login = () => {
    const onFinish = (values) => {
        const dataForm = {
            Email: values.email,
            Password: values.password
        }
        console.log(dataForm);
        Post.loginUser(dataForm).then(res => {
            console.log(res);
            alert(res);
        });
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
                    span: 8,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <h1><center>ĐĂNG NHẬP</center></h1>
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
                        offset: 10,
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
                            <Link to='/auth/registercustomer'>Đăng ký khách hàng |</Link>
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