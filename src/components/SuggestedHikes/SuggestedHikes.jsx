import React  from "react";
import s from './SuggestedHikes.module.css';
import {
    BootstrapTable,
    TableHeaderColumn
} from 'react-bootstrap-table';

const SuggestedHikes = (props) => {

    return (
        <div>
            <h1>Hikes</h1>
            <BootstrapTable data={props.hikes}>
                <TableHeaderColumn isKey dataField="num" width="100">
                    Номер
                </TableHeaderColumn>
                <TableHeaderColumn dataField="type_hike" width="200">
                    Тип похода
                </TableHeaderColumn>
                <TableHeaderColumn dataField="category" width="150">
                    Сложность
                </TableHeaderColumn>
                <TableHeaderColumn dataField="com_ncom" width="200" >
                    Вид похода
                </TableHeaderColumn>
                <TableHeaderColumn dataField="number_days" width="150">
                    Количество дней
                </TableHeaderColumn>
                <TableHeaderColumn dataField="month" width="200">
                    Месяц
                </TableHeaderColumn>
                <TableHeaderColumn dataField="name" width="200">
                    Место
                </TableHeaderColumn>
                <TableHeaderColumn dataField="country" width="200">
                    Страна
                </TableHeaderColumn>

            </BootstrapTable>

        </div>
    )
}

export default SuggestedHikes;