import React  from "react";
import s from './SuitableHikes.module.css';
import {
    BootstrapTable,
    TableHeaderColumn
} from 'react-bootstrap-table';
import {NavLink} from "react-router-dom";

class  SuitableHikes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            participant_name: '',
            type_hike: '',
            com_ncom: '',
            category: '',
            month: '',
            numberdays: '',
            place: '',
            country: '',
            type_equipment: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRowSelect = this.handleRowSelect.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit() {

        console.log(this.props.participant_name)
        fetch('http://localhost:4000/getSutHikes',
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(
                    {participant_name: this.props.participant_name})
            })
            .then(response => {
                console.log("Post");
                return response.json();
            })
            .then(res => {
                console.log({res});
                this.setState({
                        ...this.state,
                        data: res
                    }
                )
            })
        document.getElementById("tableData").hidden = false;
        document.getElementById("suitHike").hidden = true;
        console.log(this.state);
    }

    handleRowSelect(row, isSelected, e) {
        if(row.com_ncom==='commercial') {
            document.getElementById("tableData").hidden = true;
            document.getElementById("costComHike").hidden = false;
            fetch('http://localhost:4000/findCostHike',
                {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(
                        {
                            category: row.category,
                            typeHike: row.type_hike,
                            country: row.country,
                            place: row.place,
                            month: row.month,
                            number_days: row.numberdays
                        })
                })
                .then(response => {
                    return response.json();
                })
                .then(res => {
                    console.log(res);
                    return this.props.setHikeCost(res);
                })


        }
        else{
            document.getElementById("nav").hidden = false;
            this.props.setCategory(row.category);
            this.props.setTypeHike(row.type_hike);
            this.props.setNumberDays(row.numberdays);
            this.props.setCountry(row.country);
            this.props.setPlace(row.place);
            fetch('http://localhost:4000/findEquip',
                {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(
                        {
                            category_equipment: row.category,
                            typeHikeEquipment: row.type_hike
                        })
                })
                .then(response => {
                    return response.json();
                })
                .then(res => {
                    console.log(res);
                    this.props.setStateEq(res)
                })
        }
        document.getElementById("link").hidden=false;

    }

    render() {
        const selectRow = {
            mode: 'radio',
            onSelect: this.handleRowSelect
        };
        return (
            <div>
                <h2>{this.props.participant_name}</h2>
                <button className={s.button} id="suitHike" onClick={this.handleSubmit}>Show my suitable hikes</button>
                <div hidden={true} id="tableData">
                    <BootstrapTable data = {this.state.data}  selectRow={selectRow}>
                        <TableHeaderColumn isKey dataField="num" width="100">
                            Номер
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="type_hike" width="200">
                            Тип похода
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="category" width="100">
                            Сложность
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="com_ncom" width="200">
                            Вид похода
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="numberdays" width="150">
                            Количество дней
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="month" width="200">
                            Месяц
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="place" width="200">
                            Место
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="country" width="200">
                            Страна
                        </TableHeaderColumn>
                    </BootstrapTable>
                </div>
                <div id="nav" hidden={true}>
                <NavLink to="/equipment" hidden={true} className={s.link} id="link">Go</NavLink>
                </div>
                <div id="costComHike" hidden={true}>
                <h2> This is a commercial trip. </h2>
                    <h2>The cost of the trip: {this.props.hikeCost}</h2>

                </div>
            </div>
        )
    }
}

export default SuitableHikes;