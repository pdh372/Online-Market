import React from 'react';
// table
import DataTable from 'react-data-table-component';
import TableUserStyled from './index.styled';

const Table = ({ columns, data }) => {
	return (
		<TableUserStyled>
			<DataTable columns={columns} data={data} />
		</TableUserStyled>
	);
};

export default Table;
