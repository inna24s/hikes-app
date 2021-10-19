let initialState = {
    stateEq:[]
}
const equipmentReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_STATEEQ":
            return {...state, stateEq: action.payload}
    }
}

export default equipmentReducer;
