import React, { useEffect, useState } from 'react';

import Infomation from './modules/infomation';
import Menu from './modules/menu';
// import { useSelector } from 'react-redux';

const ProfileStore = () => {
	const [ tabs, setTabs ] = useState([ { component: <Infomation key={0} />, active: true } ]);
	const index = tabs.findIndex(tab => tab.active === true);

	// const user = useSelector(state => state.user);

	useEffect(
		() => {
			handleChangeTab(index);
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[ index ],
	);

	const handleChangeTab = key => {
		// const nodeList = Array.from(e.target.parentElement.querySelectorAll('.menu-item'));
		const nodeList = Array.from(document.querySelector('.dashboard__menu').querySelectorAll('.menu-item'));

		tabs.forEach((t, index) => {
			if (index === key) {
				nodeList[index].classList.add('menu-item-actived');
			}
			else {
				nodeList[index].classList.remove('menu-item-actived');
			}
		});

		const newTabs = tabs.map((t, index) => (index === key ? { ...t, active: true } : { ...t, active: false }));
		setTabs(newTabs);
	};

	return (
		<section className='dashboard'>
			<section className='dashboard__body'>
				<section className='mobie-menu-square'>
					<div className='menu-square'>
						<div className='menu-square__star' />
						<div className='menu-square__avt' />
						<div className='menu-square__wb'>{'account'}</div>
					</div>
				</section>
				<section className='dashboard__center'>
					<Menu onChangeTab={handleChangeTab} />
					{tabs.map(t => {
						if (t.active === true) {
							return t.component;
						}
						return null;
					})}
				</section>
			</section>
		</section>
	);
};

export default ProfileStore;
