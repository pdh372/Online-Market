import React from "react"
import { useParams } from "react-router-dom"
import apiUser from 'apis/user';
import { useEffect, useState } from 'react';
import { Form, Button } from 'antd';
import './approveShipperDetail.scss'

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

    console.log(thisShipper)

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
        <div className="main">
            <h2>Thông tin đăng ký chi tiết người giao hàng</h2>
            <div className="info">
                <div className="col">
                    <div>Thời gian đăng ký: {thisShipper.user.registerDate}</div>
                    <div>Họ và tên: {thisShipper.user.name}</div>
                    <div>Ngày sinh: {thisShipper.user.dob}</div>
                    <div>Số điện thoại: {thisShipper.user.phoneNumber}</div>
                    <div>CCCD: {thisShipper.user.ciNum}</div>
                    <div>Số nhà, đường: {thisShipper.user.address.streetNo}</div>
                    <div>Phường/Huyện: {thisShipper.area.ward}</div> 
                    <div>Tỉnh/Thành phố: {thisShipper.area.city}</div>
                    <div>Tình trạng: {thisShipper.user.status}</div>
                    <Form onFinish={onFinish} className="button">
                        <Form.Item>
                            <Button type='primary' htmlType='submit'>
                                Duyệt tài khoản
                            </Button>
                        </Form.Item>
                    </Form>
                </div>


                <div className="col">
                    <div>Ảnh Căn cước công dân</div>
                    <div><img src={thisShipper.user.imgCI.front} alt="" width={350} /></div>
                    <div><img src={thisShipper.user.imgCI.backside} alt="" width={350} /></div>
                </div>
                <div className="col">
                    <div>Ảnh Giấy phép lái xe</div>
                    <div><img src={thisShipper.shipper.imgLicense.front} alt="" width={350} /></div>
                    <div><img src={thisShipper.shipper.imgLicense.backside} alt="" width={350} /></div>
                </div>



            </div>
        </div>
    )
}

export default ApproveShipperDetail;