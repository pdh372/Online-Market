import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineLogin } from 'react-icons/ai';
import { DropDownStyled, MenuStyled } from '../../elements/dropdown/header/header.styled';
import { Menu } from 'antd';
import './header.scss';
// import { Input, Space } from 'antd';
// import { AudioOutlined } from '@ant-design/icons';

// const { Search } = Input;

// const suffix = (
// 	<AudioOutlined
// 		style={{
// 			fontSize: 16,
// 			color: '#1890ff',
// 		}}
// 	/>
// );

// const onSearch = value => console.log(value);

const Header = () => {
	const menuRef = useRef(
		<MenuStyled className='menu'>
			<Menu.Item className='menu-item'>
				<Link to='/auth/login'>Đăng Nhập</Link>
			</Menu.Item>
			<Menu.Item className='menu-item'>
				<Link to='/auth/registercustomer'>Đăng Kí</Link>
			</Menu.Item>
		</MenuStyled>,
	);

	
	return (
		<header>
			<div className='header__logo'>
				<Link to='/'>Logo</Link>
			</div>

			<div className='header__search'>
				<input type='text' placeholder='Tìm Kiếm' />
  				<button type="submit"><i class="fa fa-search"></i></button>
			</div>
			{/* <div className='input'>
			<Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 500 }} />		
			</div> */}

			<div className='header__router'>
				<div className='rotuer-item'>
					<p>Cửa Hàng</p>
				</div>
				<div className='rotuer-item'>
					<p>Danh Mục</p>
				</div>
				<div className='rotuer-item'>
					<p>Yêu Thích</p>
				</div>
			</div>

			<div className='header__user'>
				<span>
					<DropDownStyled overlay={menuRef.current} placement='bottomRight' arrow className='dropdown-custom'>
						<AiOutlineLogin />
					</DropDownStyled>
				</span>
			</div>
		</header>
	);
};

export default Header;
