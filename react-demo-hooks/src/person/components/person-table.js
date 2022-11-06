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
        <div style={{width : '90vw', margin : 'auto', backgroundImage: 'linear-gradient(rgb(116, 172, 196), rgb(17, 56, 97))' }}>
            <Table
                data={props.tableData}
                setReload={props.setReload}
                />
        </div>
    );
}

export default PersonTable;