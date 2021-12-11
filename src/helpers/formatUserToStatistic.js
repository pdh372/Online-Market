export const formatUserToStatistic = dataFromBe => {
	return dataFromBe.reduce(
		(result, item) => {
			const { labels, data } = result;

			const index = result.labels.findIndex(x => x === item.address.color);

			if (index >= 0) {
				data[index] = data[index] + 1;
				return { ...result, data };
			}
			else {
				const newLabels = [ ...labels, item.address.color ];
				const newData = [ ...data, 1 ];
				return { labels: newLabels, data: newData };
			}
		},
		{ labels: [], data: [] },
	);
};
