import React from "react"
import { useParams } from "react-router-dom"
import apiUser from 'apis/user';
import { useEffect, useState } from 'react';
import { Form, Button } from 'antd';


function ApproveProviderDetail() {
    const [thisStore, setThisStore] = useState(null);

    const params = useParams()

    useEffect(() => {
        const getData = async () => {
            const data = await apiUser.get.store(params.storeId);
            setThisStore(data);
        }
        getData()
    }, [params.storeId])

    console.log(thisStore)

    const onFinish = () => {
        console.log(thisStore);
        var user = thisStore.user;

        apiUser.put.activeUser(user).then(res => {
            console.log(res);
            alert(res);
        });
    };

    return (thisStore &&
        <div className="main">
            <h2>Thông tin đăng ký chi tiết nhà cung cấp</h2>
            <div className="info">
                <div className="col">
                    <div>Thời gian đăng ký: {thisStore.user.registerDate}</div>
                    <div>Người đại diện: {thisStore.user.name}</div>
                    <div>Ngày sinh: {thisStore.user.dob}</div>
                    <div>Số điện thoại: {thisStore.user.phoneNumber}</div>
                    <div>CCCD: {thisStore.user.ciNum}</div>
                    <div>Tên nhà cung cấp: {thisStore.store.name}</div>
                    <div>Số nhà, đường: {thisStore.store.address.streetNo}</div>
                    <div>Phường/Huyện: {thisStore.area.ward}</div> 
                    <div>Tỉnh/Thành phố: {thisStore.area.city}</div>
                    <div>Tình trạng: {thisStore.user.status}</div>
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
                    <div><img src={thisStore.user.imgCI.front} alt="" width={350} /></div>
                    <div><img src={thisStore.user.imgCI.backside} alt="" width={350} /></div>
                </div>
                <div className="col">
                    <div>Giấy phép kinh doanh/từ thiện</div>
                    <div><img src={thisStore.store.license} alt="" width={350} /></div>
                </div>
            </div>
        </div>
    )
}

export default ApproveProviderDetail