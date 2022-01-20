export const formatUserToStatistic = dataFromBe => {
	const { areas, users } = dataFromBe;

	return users.reduce(
		(result, user) => {
			const { labels, data } = result;
			const indexArea = areas.findIndex(area => area._id === user.address.area);

			const color = areas[indexArea].levelName;
			const index = result.labels.findIndex(x => x === color);

			if (index >= 0) {
				data[index] = data[index] + 1;
				return { ...result, data };
			}
			else {
				const newLabels = [ ...labels, color ];
				const newData = [ ...data, 1 ];
				return { labels: newLabels, data: newData };
			}
		},
		{ labels: [ 'Xanh', 'Vàng', 'Cam', 'Đỏ' ], data: [ 0, 0, 0, 0 ] },
	);
};
