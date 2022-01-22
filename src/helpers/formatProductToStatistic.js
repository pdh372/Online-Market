export const formatProductToStatistic = dataFromBe => {
	const products = [ ...dataFromBe ];

	return products.reduce(
		(result, product) => {
			const { labels, data } = result;
			const index = labels.findIndex(label => label === product.category);

			if (index >= 0) {
				data[index] = data[index] + 1;
				return { ...result, data };
			}
			else {
				const newLabels = [ ...labels, product.category ];
				const newData = [ ...data, 1 ];
				return { labels: newLabels, data: newData };
			}
		},
		{ labels: [], data: [] },
	);
};
