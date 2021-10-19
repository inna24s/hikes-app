const GET_HIKES = 'GET_HIKES';
const SET_HIKES = 'SET_HIKES';
let initialState = {
    hikes:[],
    numberDays:10,
    place:"",
    country:"",
    type:"",
    category:1,
    stateEq:[],
    hikeCost:0,
    summ:0,
    costNutr:0,
    numberPeople:"",
    costTrans:0
}
const suggestedHikesReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_HIKES:
            return { ...state, hikes:[...action.hikes]}
        case "SET_NAME":
            return {...state,participant_name: action.payload}
        case "SET_NUMBERDAYS":
            return {...state,numberDays: action.payload}
        case "SET_NUMBERPEOPLE":
            return {...state,numberPeople: action.payload}
        case "SET_PLACE":
            return {...state,place: action.payload}
        case "SET_COUNTRY":
            return {...state,country: action.payload}
        case "SET_TYPE":
            return {...state,type: action.payload}
        case "SET_CATEGORY":
            return {...state,category: action.payload}
        case "SET_STATEEQ":
            return {...state, stateEq: action.payload}
        case "SET_HIKECOST":
            return {...state, hikeCost: action.payload}
        case "SET_SUMM":
            return {...state, summ: action.payload}
        case "SET_COSTTRANS":
            return {...state, costTrans: action.payload}
        case "SET_COSTNUTR":
            return {...state, costNutr: action.payload}
        default: return state
    }

}

export const setHikes = (hikes) =>({type: SET_HIKES, hikes})

export const getHikes = () => {
    return (dispatch) => {
        fetch('http://localhost:4000/suggestedHikes')
            .then(response => {
                return response.json();
            })
            .then(res => {
                console.log({res});
                dispatch(setHikes(res))
            })
    }
}

export default suggestedHikesReducer;