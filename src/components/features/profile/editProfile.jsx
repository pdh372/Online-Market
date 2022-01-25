import React from 'react';
import residences from '../auth/address';
import { Form, Input, Button, DatePicker, Cascader } from 'antd';
import Put from '../../../apis/user/put';

//const { Option } = Select;

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

const EditProfile = () => {

  //const userId = get from jwt;

	const onFinish = (values) => {
    const dataForm = {
        User: {
            ObjectId: '61c6c1cc8b13cec28c41b24f',
            Name: values.user.name,
            CINum: values.user.id,
            DoB: values.user.dob.format('DD-MM-YYYY'),
            PhoneNumber: values.user.phone,
            Address:
            {
                StreetNo: values.user.number + ' ' + values.user.street,
            }
        },
        Area:
        {
            City: values.user.residence[0],
            District: values.user.residence[1],
            Ward: values.user.residence[2],
        }
    }

    console.log(dataForm);
    Put.user(dataForm).then(res => {
        console.log(res);
        alert(res);
    });
  };

return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <h1><center>CHỈNH SỬA TÀI KHOẢN</center></h1>
        
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
            <DatePicker />
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
        
        <h3><center>Thông tin địa chỉ giao hàng</center></h3>
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
       
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 11 }}>
            <Button type="primary" htmlType="submit">
                Lưu
            </Button>
        </Form.Item>
    </Form>
  )
};

export default EditProfile;
