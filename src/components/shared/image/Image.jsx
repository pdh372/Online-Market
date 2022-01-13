import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';

import { fill } from '@cloudinary/url-gen/actions/resize';
import { Tooltip } from 'antd';

const Image = ({ w, h, public_id, styles = {}, tooltip, placement }) => {
	const cld = new Cloudinary({
		cloud : {
			cloudName : 'hmsp-com',
		},
	});

	const myImage = cld.image(public_id || 'avatars/tjcano50qgmsud8tfdt3');

	myImage.resize(fill().width(w | 50).height(h | 50));

	return (
		<Tooltip placement={placement || 'top'} title={tooltip || ''}>
			<AdvancedImage cldImg={myImage} style={styles} />
		</Tooltip>
	);
};

export default Image;
