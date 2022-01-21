import React from "react";
import { Link } from "react-router-dom";
import apiUser from 'apis/user';
import { useEffect, useState } from 'react';

const ApproveProvider = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await apiUser.get.providerPending();
      setProviders(data);
    }
    getData()
  }, [])

  return (
    <div>
      <h2><center>Danh sách các đăng ký nhà cung cấp chờ duyệt</center></h2>
      <div className="App">
        <table>
          <tr>
            <th>Ngày đăng ký</th>
            <th>Họ và tên</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Tình trạng</th>
          </tr>
          {providers.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.registerDate}</td>
                <td className="link"><Link to={`/admin/approveprovider/${val._id}`}>{val.name}</Link></td>
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

export default ApproveProvider;