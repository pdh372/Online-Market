import React, { useEffect, useState } from 'react';
import storeApi from 'apis/store';
import ContainerPage from 'components/shared/containerPage/ContainerPage';

const StoreList = () => {
	const [ isLoading, setIsLoading ] = useState(true);
	const [ stores, setStores ] = useState([]);

	useEffect(async () => {
		const data = await storeApi.get.getAll();
		setStores(data);
		setIsLoading(false);
	}, []);

  const deleteStore = id => {
    
  }

	const renderStores = () => {
		const storeRows = stores.map(item => {
			return (
				<tr key={item._id}>
					<td>{item.name}</td>
					<td>{item.type}</td>
					<td>{item.address.streetNo}</td>
					<td>
						<img src={item.license} width='400px' />
					</td>
					<td><button>Xóa</button></td>
				</tr>
			);
		});

		return (
			<React.Fragment>
				<table>
					<thead>
						<tr>
							<th>Tên</th>
							<th>Loại cửa hàng</th>
							<th>Điạ chỉ</th>
							<th>Giấy phép</th>
							<th>Quản lý</th>
						</tr>
					</thead>
					<tbody>{storeRows}</tbody>
				</table>
			</React.Fragment>
		);
	};

	if (isLoading) {
		return (
			<React.Fragment>
				<ContainerPage>
					<p>loading...</p>
				</ContainerPage>
			</React.Fragment>
		);
	}
	else {
		return (
			<React.Fragment>
				<ContainerPage>
					<div className='container'>{renderStores()}</div>
				</ContainerPage>
			</React.Fragment>
		);
	}
};

export default StoreList;
