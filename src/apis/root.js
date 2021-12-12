// api/axiosClient.js
import axios from 'axios';
// import queryString from 'query-string';

const axiosClient = axios.create({
	baseURL : process.env.REACT_APP_BE_HOST_DOTNET,
	headers : {
		'content-type' : 'application/json',
	},
	// paramsSerializer : params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async config => {
	// Handle token here ...
	return config;
});

axiosClient.interceptors.response.use(
	response => {
		if (response && response.data) {
			return response.data;
		}
		return response;
	},
	error => {
		throw error;
	},
);

//axios pipeline: interceptors response

export default axiosClient;
