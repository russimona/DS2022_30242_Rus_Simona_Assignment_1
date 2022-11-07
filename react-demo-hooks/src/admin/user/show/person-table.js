import React from "react";

import Table from "./table";


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