import React from "react";
import './approveShipper.scss'
//import data from "./productsData";
import { Link } from "react-router-dom";
import apiUser from 'apis/user';
import { useEffect, useState } from 'react';

const ApproveShipper = () => {

    const [shippers, setShippers] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data = await apiUser.get.shipperPending();
            setShippers(data);
        }
        getData()
    }, [])

    return (
        <div>
            <h2><center>Danh sách các đăng ký người giao hàng chờ duyệt</center></h2>
            <div className="App">

                <table>
                    <tr>
                        <th>Ngày đăng ký</th>
                        <th>Họ và tên</th>
                        <th>Email</th>
                        <th>Số điện thoại</th>
                        <th>Tình trạng</th>
                    </tr>
                    {shippers.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.registerDate}</td>
                                <td className="link"><Link to={`/admin/approveshipper/${val._id}`}>{val.name}</Link></td>
                                <td>{val.email}</td>
                                <td>{val.phoneNumber}</td>
                                <td className="status">{val.status}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </div>
    )
};

export default ApproveShipper;