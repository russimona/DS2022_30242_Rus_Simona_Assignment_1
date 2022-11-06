import React from "react";

import Table from "../../commons/tables/table";

const columns = [
    {
        Header: 'Name',
        accessor: 'name',
    },
    {
        Header: 'Surname',
        accessor: 'surname',
    },
    {
        Header: 'Email',
        accessor: 'email',
    }
];

const filters = [
    {
        accessor: 'name',
    },

    {
        accessor: 'surname',
    },
    {
        accessor: 'email',
    }
];

function PersonTable(props) {
    return (
        <div style={{width : '90vw', margin : 'auto', backgroundColor:'transparent' }}>
            <Table
                data={props.tableData}
                columns={columns}
                search={filters}
                pageSize={5}
                onRowClick={(row) => console.log(row.original)} />

        </div>

    );
}

export default PersonTable;