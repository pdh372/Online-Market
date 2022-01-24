export function getReviews() {
	const data = [
		{
			author: 'Linh Dương Ngọc Lan',
			avatar:
				'https://media.techz.vn/resize_x355x/media2019/upload2019/2022/01/22/Ninh-duong-lan-ngoc-khoe-than-hinh-nuot-na-voi-vong-eo-phang-li-khong-kem-canh-ngoc-trinh_22012022145338.jpg',
			content: <p>Rất tuyệt vời</p>,
			datetime: '2022-01-12 15:32:69',
		},
		{
			author: 'Chu Pi',
			avatar: 'https://toplist.vn/images/800px/chi-pu-558249.jpg',
			datetime: '2022-01-05 08:14:25',
			content: <p>Giao hàng nhanh, thực phẩm chất lượng. 5 sao!</p>,
		},
		{
			author: 'Karich',
			avatar:
				'https://media-cdn.laodong.vn/storage/newsportal/2022/1/15/995343/271257206_4488128067.jpg',
			datetime: '2022-01-01 17:49:51',
			content: <p>Giá quá rẻ!</p>,
		},
		{
			author: 'Waowee',
			avatar:
				'https://vnn-imgs-f.vgcloud.vn/2021/10/18/15/phia-sau-trang-phuc-bao-ho-gay-tranh-cai-cua-rapper-wowy-trong-rap-viet.jpg',
			datetime: '2022-01-20 20:08:25',
			content: <p>Nhân viên giao hàng thân thiện</p>,
		},
		{
			author: 'Châu Ngọt',
			avatar:
				'https://thuongtruong24h.vn/uploads/wp-content/uploads/2020/07/chau-bui.png',
			datetime: '2021-12-29 10:59:20',
			content: <p>Thực phẩm hơi cũ :\</p>,
		},
	];
	var shuffled = data.sort(function () {
		return 0.5 - Math.random();
	});

	var selected = shuffled.slice(0, 3);

	return selected;
}
const reviewService = {
	getReviews,
};
export default reviewService;
