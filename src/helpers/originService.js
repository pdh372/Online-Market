export function getOrigin() {
	let originCountries = ['Trung Quốc', 'Việt Nam', 'Thái Lan'];
	return originCountries[Math.floor(Math.random() * originCountries.length)];
}

export default {
	getOrigin,
};
