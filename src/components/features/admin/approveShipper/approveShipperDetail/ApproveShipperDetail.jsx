import React from "react"
import { useParams } from "react-router-dom"
import apiUser from 'apis/user';
import { useEffect, useState } from 'react';
import { Form, Button } from 'antd';

function ApproveShipperDetail() {
    const [thisShipper, setThisShipper] = useState(null);

    const params = useParams()

    useEffect(() => {
        const getData = async () => {
            const data = await apiUser.get.shipper(params.shipperId);
            setThisShipper(data);
        }
        getData()
    }, [params.shipperId])

    // function imgConvert(binary){
    //     const b = binary.split(",");
    //     return b;
    // }

    // const imgSplit = (binary) => {
    //     const b = binary.split(",");
    //     return b;
    // }

    const onFinish = () => {
        console.log(thisShipper);
        //console.log(imgSplit(thisShipper.user.imgCI)[0])
        var user = thisShipper.user;

        apiUser.put.activeUser(user).then(res => {
            console.log(res);
            alert(res);
        });
    };

    return (thisShipper &&
        <div>
            <h2>Thông tin đăng ký chi tiết người giao hàng</h2>
            <h3>Ngày đăng ký: {thisShipper.user.registerDate}</h3>
            <h3>Họ và tên: {thisShipper.user.name}</h3>
            <h3>Ngày sinh: {thisShipper.user.dob}</h3>
            <h3>Số điện thoại: {thisShipper.user.phoneNumber}</h3>
            <h3>CCCD: {thisShipper.user.ciNum}</h3>
            <h3>Địa chỉ: {thisShipper.user.address.streetNo} {thisShipper.user.address.area.ward}</h3>
            <h3>Tình trạng: {thisShipper.user.status}</h3>
            <h3>Ảnh CCCD: </h3>
            {/* <img src={`data:image/png;base64,${binary_data}`} /> */}
            <Form onFinish={onFinish} >
                <Form.Item>
                    <Button type='primary' htmlType='submit'>
                        Duyệt tài khoản
                    </Button>
                </Form.Item>
            </Form>
        </div>

    )
}

export default ApproveShipperDetail;