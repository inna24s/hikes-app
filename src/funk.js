import React, {useState, useEffect, Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import Card from 'react-bootstrap/Card';

const Func = () => {
    const [hikes, setHikes] = useState([]);
    useEffect(() => {
        getHikes();
    }, []);

    function getHikes() {
        fetch('http://localhost:4000')
            .then(response => {
                return response.json();
            })
            .then(res => {
                console.log({res});
                setHikes(res)
            })
    }

    return (
        <div>
            <BootstrapTable data={hikes}>
                <TableHeaderColumn isKey dataField="hike_id" width="200">
                    Номер
                </TableHeaderColumn>
                <TableHeaderColumn dataField="com_ncom" width="500">
                    Вид похода
                </TableHeaderColumn>
                <TableHeaderColumn dataField="category" width="200">
                    Сложность
                </TableHeaderColumn>
                <TableHeaderColumn dataField="type_id" width="200">
                    Тип похода
                </TableHeaderColumn>
                <TableHeaderColumn dataField="number_days" width="200">
                    Количество дней
                </TableHeaderColumn>
                <TableHeaderColumn dataField="month">
                Месяц
            </TableHeaderColumn>

        </BootstrapTable>

</div>

);

}
export default Func;