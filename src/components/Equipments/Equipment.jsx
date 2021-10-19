import React, {Fragment} from "react";
import s from './Equipment.module.css';
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";

let summ=0;
class Equipment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type_equipment:'',
            cost_day_rub:''
        };
        this.onClick = this.onClick.bind(this);
        this.handleRowSelect = this.handleRowSelect.bind(this);
    }
    handleRowSelect(row,isSelected,  e) {

        document.getElementById("but").hidden=false;
       summ+=Number(row.cost_day_rub);
        console.log(summ);
        return this.props.setSumm(summ);

    }
    onClick(){
        document.getElementById("costHike").hidden=false;
        document.getElementById("but").hidden=true;
        document.getElementById("tableEquipment").hidden=true;
        fetch('http://localhost:4000/findcostTrans',
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(
                    {
                        country: this.props.country,
                        place: this.props.place
                    })
            })
            .then(response => {

                return response.json();
            })
            .then(res => {
                console.log({res});
                this.props.setCostTrans(res);
            })

        fetch('http://localhost:4000/findcostNutr',
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(
                    {
                        category: this.props.category,
                        typeHike: this.props.typeHike,
                        numberDays: this.props.numberDays
                    })
            })
            .then(response => {
                return response.json();
            })
            .then(res => {
                console.log({res});
                this.props.setCostNutr(res);
            })
    }

    render() {
        const selectRow = {
            mode: 'checkbox', // single row selection
            onSelect: this.handleRowSelect
        };
        return (
            <div>
                <h2>{this.props.participant_name}</h2>
                <div id="tableEquipment">
                    <h2>This is necessary equipment for the chosen hike.</h2>
                    <h2>Select the equipment you want to rent:</h2>
                    <div id="tableData">
                        <BootstrapTable data = {this.props.stateEq} selectRow={selectRow}>
                            <TableHeaderColumn dataField="type_equipment" isKey width="200">
                                Снаряжение
                            </TableHeaderColumn>
                            <TableHeaderColumn dataField="cost_day_rub" width="200">
                                Стоимость снаряжения в день
                            </TableHeaderColumn>
                        </BootstrapTable>
                        <h2>Total cost of equipment per day: {this.props.summ}</h2>
                    </div>
                </div>
                <button id="but" onClick={this.onClick}> Find the cost</button>
                <div className={s.contacts} hidden={true} id="costHike">
                    <h2>Transfer: {this.props.costTrans}</h2>
                    <h2>Nutrition: {this.props.costNutr}</h2>
                    <h2>Equipment: {summ*this.props.numberDays}</h2>
                    <h2>+ road</h2>
                    <h1>Result: {Number(this.props.costTrans) + Number(this.props.costNutr) + summ*this.props.numberDays} + road </h1>
                </div>
            </div>

        );
    }
}
export default Equipment;