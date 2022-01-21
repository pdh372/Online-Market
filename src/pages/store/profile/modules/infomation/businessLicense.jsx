import React from 'react';
import Image from 'components/shared/image/Image';

const BusinessLicense = ({ setAvatar }) => {
	const handleChangeImage = e => {
		let file = e.target.files[0];

		let reader = new FileReader();
		reader.readAsDataURL(file);

		reader.onloadend = function () {
			if (reader.result) {
				setAvatar(reader.result);
			}
		};
	};
	return (
		<React.Fragment>
			<input placeholder='Chọn Giấy Phép Kinh Doanh' type='file' onChange={handleChangeImage} name='avatar' />
			<article className='grid__item' style={{ display: 'flex', justifyContent: 'center' }}>
				<Image w={250} h={250} />
			</article>
		</React.Fragment>
	);
};

export default BusinessLicense;
