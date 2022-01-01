const moment = require('moment');

const formatDateMongoose = date => {
	return moment(date).format('DD-MM-YYYY');
};

export default formatDateMongoose;
