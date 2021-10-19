
let initialState = {
    hikeCost:0,
    summ:0,
    costNutr:0,
    costTrans:0,
}
const costReducer = (state = initialState, action) => {
    switch (action.type) {
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

export default costReducer;