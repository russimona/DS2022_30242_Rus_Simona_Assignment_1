import React, { useState, useEffect, useReducer } from "react";
import 'react-table/react-table.css';
import { Col, Row } from "react-bootstrap";

//others
import add from '../../assets/add.png';
import edit from '../../assets/edit.png';
import delete_icon from '../../assets/delete.png';


function Table(props) {
    const [data, setData] = useState(props.data);
    const [columns, setColumns] = useState(props.columns);
    const [search, setSearch] = useState(props.search);
    const [filters, setFilters] = useState([]);
    const [pageSize, setPageSize] = useState(props.pageSize || 10);

    const [, updateState] = React.useState();


    console.log(data)
    return (
        <div style={{margin: "auto", marginTop:'30px', backgroundColor: '#b9ede8', padding:'20px'}}>


                {
                    data.map((user) => {
                        return (
                            <Row key={user.id} >
                                <Col>
                                    <p style={{color: 'black'}}>{user.name}</p>
                                </Col>
                                <Col>
                                    <p style={{color: 'black'}}>{user.surname}</p>
                                </Col>
                                <Col>
                                    <p style={{color: 'black'}}>{user.email}</p>
                                </Col>
                               <Col>
                                   <button style={{backgroundColor: 'transparent', border: 'none', color: 'white'}} onClick={()=>{
                                       console.log(user.id)}}>
                                       <img alt='add device' src={add} style={{height: '30px', width:"30px", }}/>
                                   </button>
                                   <button style={{backgroundColor: 'transparent', border: 'none'}} onClick={()=>{
                                       console.log(user.id)}}>
                                       <img alt='edit device' src={edit} style={{height: '30px', width:"30px"}}/>
                                   </button>
                                   <button style={{backgroundColor: 'transparent', border: 'none'}} onClick={()=>{
                                       console.log(user.id)}}>
                                       <img alt='delete device' src={delete_icon} style={{height: '30px', width:"30px"}}/>
                                   </button>
                               </Col>
                            </Row>
                        )
                    })
                }

        </div>
    );
}

export default Table;
