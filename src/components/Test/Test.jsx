import React, {Fragment} from 'react';
import s from './Test.module.css'
import SuitableHikes from "../SuitableHikes/SuitableHikes";
import {NavLink} from "react-router-dom";
import {setStateField} from "../../Redux/test-reducer";

const Test = (props) => {
    let onFieldChange = (e) => {
        let changeField = e.target.name
        let newValue = e.target.value
        props.updateField(changeField,newValue);
    }

    let submitData =()=>{
        props.handleSubmit();
    }

    return (
        <Fragment>
            <form method="POST" onSubmit={submitData}>
                <div>
                    <h2> Select the type of hike</h2>
                    <div>
                        <input type="radio" name="hikeType" value="commercial"
                               checked={props.hikeType === "commercial"} onChange={onFieldChange} required/>
                        <label> Commercial</label>
                    </div>
                    <div>
                        <input type="radio" name="hikeType" value="not commercial"
                               checked={props.hikeType === "not commercial"} onChange={onFieldChange}
                               required/>
                        <label> Not commercial</label>
                    </div>
                </div>
                <div>
                    <h2> Select kind of hike</h2>
                    <div><input type="radio" name="hikeKind" value="mountain"
                                checked={props.hikeKind === "mountain"} onChange={onFieldChange} required/>
                        <label>Mountain</label>
                    </div>
                    <div>
                        <input type="radio" name="hikeKind" value="water" checked={props.hikeKind === "water"}
                               onChange={onFieldChange} required/>
                        <label> Water</label>
                    </div>
                    <div>
                        <input type="radio" name="hikeKind" value="ski" checked={props.hikeKind === "ski"}
                               onChange={onFieldChange} required/>
                        <label> Ski</label>
                    </div>
                    <div>
                        <input type="radio" name="hikeKind" value="pedestrian"
                               checked={props.hikeKind === "pedestrian"} onChange={onFieldChange} required/>
                        <label> Pedestrian</label>
                    </div>
                </div>
                <div>
                    <h2> Enter the max category of the hike in which you were.</h2>
                    <h2>If you have no experience, enter 0</h2>
                    <input type="text" className={s.category} name="category" placeholder="Enter max hiking category "
                           value={props.category} onChange={onFieldChange} required={true} pattern="[0-9]"/>
                </div>
                <div>
                    <h2>Select month</h2>
                    <select name="month" onChange={onFieldChange} value={props.month} required>
                        <option value="january"> January</option>
                        <option value="february"> February</option>
                        <option value="may"> May</option>
                        <option value="june"> June</option>
                        <option value="july"> July</option>
                        <option value="august"> August</option>
                        <option value="september"> September</option>
                        <option value="december"> December</option>
                    </select>
                </div>
                <div>
                    <button type="submit">FIND HIKE</button>
                </div>
            </form>
        </Fragment>
    );
}


export default Test;

