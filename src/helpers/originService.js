export function getOrigin() {
	let originCountries = ['Trung Quốc', 'Việt Nam', 'Thái Lan'];
	return originCountries[Math.floor(Math.random() * originCountries.length)];
}
const originService = {
	getOrigin,
};
export default originService;
