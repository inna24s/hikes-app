import React from 'react';
import {connect} from "react-redux";
import Test from "./Test";
import {handleSubmit, updateField} from "../../Redux/test-reducer";

let mapStateToProps = (state) => {
    return{
        hikeType: state.testPage.hikeType,
        hikeKind: state.testPage.hikeKind,
        category: state.testPage.category,
        month: state.testPage.month
    }
}
export default connect(mapStateToProps,{handleSubmit, updateField})(Test);

