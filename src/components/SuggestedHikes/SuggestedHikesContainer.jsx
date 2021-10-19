import React from "react";
import {connect} from "react-redux";
import SuggestedHikes from "./SuggestedHikes";
import {getHikes} from "../../Redux/suggestedHike-reducer";
class SuggestedHikesAPIContainer extends React.Component {

    componentDidMount() {
        this.props.getHikes()
    };

    render() {
        return <SuggestedHikes hikes = {this.props.hikes}/>
    }
}

let mapStateToProps = (state) => {
    return {
        hikes: state.suggestedHikesPage.hikes
    }
}

export default connect(mapStateToProps, {getHikes})(SuggestedHikesAPIContainer)