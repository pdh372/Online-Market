const moment = require('moment');

const formatDateMongoose = date => {
	try {
		const ISO = new Date(date).toISOString();

		return moment(ISO).format('DD-MM-YYYY');
	} catch (err) {
	} finally {
		console.log(date);
		return moment(date).format('DD-MM-YYYY');
	}
};

export default formatDateMongoose;
