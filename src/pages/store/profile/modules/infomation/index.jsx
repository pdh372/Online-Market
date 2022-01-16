import React, { useState } from 'react';

import EditProfile from './editProfile';

const Infomation = () => {
	const [ tabs, setTabs ] = useState([ { component: <EditProfile key={0} />, active: true } ]);

	const handleChangeTab = (key, e) => {
		const nodeList = Array.from(
			e.target.parentElement.parentElement.querySelectorAll('.infomation-tabs-title__item'),
		);

		const newTabs = tabs.map((t, index) => {
			if (index === key) {
				nodeList[index].classList.add('infomation-tabs-title__item-actived');
				return { ...t, active: true };
			}
			else {
				nodeList[index].classList.remove('infomation-tabs-title__item-actived');
				return { ...t, active: false };
			}
		});

		setTabs(newTabs);
	};

	return (
		<section className='dashboard__infomation'>
			<section className='dashboard__infomation-conainer'>
				<div className='infomation-title'>
					<p>Thông Tin Cửa Hàng</p>
				</div>

				<div className='infomation-explain'>
					<p>Bạn có thể chỉnh sửa và quản lí tài khoản phía bên dưới:</p>
				</div>

				<section className='infomation-tabs'>
					<div className='infomation-tabs-title'>
						<div
							className='infomation-tabs-title__item infomation-tabs-title__item-actived'
							onClick={e => handleChangeTab(0, e)}
						>
							<span>Quản lí cửa hàng</span>
						</div>
					</div>

					<article className='infomation-tabs-body'>
						{tabs.map(t => {
							if (t.active === true) {
								return t.component;
							}
							else {
								return null;
							}
						})}
					</article>
				</section>
			</section>
		</section>
	);
};

export default Infomation;
