import get from './get';
import put from './put';
import post from './post';
import { Post } from './post';
const orderApi = {
	get,
	put,
	post,
	postClass : new Post(),
};

export default orderApi;
