import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Route, BrowserRouter} from "react-router-dom";
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import MainPage from "./components/MainPage/MainPage";
import AboutHikes from "./components/AboutHikes/AboutHikes";
import Reviews from "./components/Revews/Reviews";
import AboutUs from "./components/AboutUs/AboutUs";
import Contacts from "./components/Contacts/Contacts";
import {Switch} from "react-router";
import Welcome from "./components/Welcome/welcom";
import SuggestedHikesContainer from "./components/SuggestedHikes/SuggestedHikesContainer";
import TestContainer from "./components/Test/TestContainer";


class  App extends React.Component  {
    render() {
        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <Header/>
                    <NavBar/>
                    <div className="app-wrapper-content">
                        <Switch>
                            <Route exact path="/" render={() => <Welcome/>}/>
                            <Route path="/mainPage" render={() => <MainPage/>}/>
                            <Route path="/aboutHikes" render={() => <AboutHikes/>}/>
                            <Route path="/suggestedHikes" render={() => <SuggestedHikesContainer />}/>
                            <Route path="/reviews" render={() => <Reviews/>}/>
                            <Route path="/aboutUs" render={() => <AboutUs/>}/>
                            <Route path="/contacts" render={() => <Contacts/>}/>
                            <Route path="/test" render={() => <TestContainer/> } />
                            {/*<Route path="/test" render={() => <Test participant_name={this.props.participant_name}*/}
                            {/*                                        setName={this.props.setNameFunction}/>}/>*/}
                            {/*<Route path="/suitableHikes"*/}
                            {/*       render={() => <SuitableHikes participant_name={this.props.participant_name}*/}
                            {/*                                    setNumberDays={this.props.setNumberDaysFunction}*/}
                            {/*                                    setPlace={this.props.setPlaceFunction}*/}
                            {/*                                    setCountry={this.props.setCountryFunction}*/}
                            {/*                                    setTypeHike={this.props.setTypeFunction}*/}
                            {/*                                    setCategory={this.props.setCategoryFunction}*/}
                            {/*                                    setStateEq={this.props.setStateEqFunction}*/}
                            {/*                                    setHikeCost={this.props.setHikeCostFunction}*/}
                            {/*                                    hikeCost={this.props.hikeCost}/>}*/}
                            {/*/>*/}
                            {/*<Route path="/equipment"*/}
                            {/*       render={() => <Equipment participant_name={this.props.participant_name}*/}
                            {/*                                numberDays={this.props.numberDays}*/}
                            {/*                                place={this.props.place}*/}
                            {/*                                country={this.props.country}*/}
                            {/*                                typeHike={this.props.type}*/}
                            {/*                                category={this.props.category}*/}
                            {/*                                numberPeople = {this.props.setNumberPeopleFunction}*/}
                            {/*                                stateEq={this.props.stateEq}*/}
                            {/*                                setSumm={this.props.setSummFunction}*/}
                            {/*                                summ={this.props.summ}*/}
                            {/*                                setCostNutr={this.props.setCostNutrFunction}*/}
                            {/*                                costNutr={this.props.costNutr}*/}
                            {/*                                setCostTrans={this.props.setCostTransFunction}*/}
                            {/*                                costTrans={this.props.costTrans}/>}*/}
                            {/*/>*/}
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }


}

// function mapStateToProps(state){
//     return{
//             participant_name: state.userInfoName.participant_name,
//         numberDays:state.userInfoName.numberDays,
//         place:state.userInfoName.place,
//         numberPeople:state.userInfoName.numberPeople,
//         country:state.userInfoName.country,
//         type:state.userInfoName.type,
//         category:state.userInfoName.category,
//         stateEq:state.userInfoName.stateEq,
//         hikeCost:state.userInfoName.hikeCost,
//         summ: state.userInfoName.summ,
//         costNutr: state.userInfoName.costNutr,
//         costTrans: state.userInfoName.costTrans
//         }
// }
//
// function mapDispatchToProps(dispatch){
//     return{
//         setHikeCostFunction: hikeCost =>{
//             dispatch(setHikeCostAction(hikeCost))
//         },
//         setNumberPeopleFunction: numberPeople =>{
//             dispatch(setNumberPeopleAction(numberPeople))
//         },
//         setNameFunction: participant_name=>{
//             dispatch(setNameAction(participant_name))
//         },
//         setNumberDaysFunction: numberDays=>{
//             dispatch(setNumberDaysAction(numberDays))
//         },
//         setPlaceFunction: place =>{
//             dispatch(setPlaceAction(place))
//         },
//         setCountryFunction: country =>{
//             dispatch(setCountryAction(country))
//         },
//         setTypeFunction: type =>{
//             dispatch(setTypeAction(type))
//         },
//         setCategoryFunction: category =>{
//             dispatch(setCategoryAction(category))
//         },
//         setStateEqFunction: stateEq =>{
//             dispatch(setStateEqAction(stateEq))
//         },
//         setSummFunction: summ => {
//             dispatch(setSummAction(summ))
//         },
//         setCostNutrFunction: costNutr => {
//             dispatch(setCostNutrAction(costNutr))
//         },
//         setCostTransFunction: costTrans => {
//             dispatch(setCostTransAction(costTrans))
//         }
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(App)

export default App;
