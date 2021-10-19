const SET_HIKE_TYPE = "SET_STATE_FIELD";
const SET_HIKE_KIND = "SET_HIKE_KIND";
const SET_CATEGORY = "SET_CATEGORY";
const SET_MONTH = "SET_MONTH";
const GET_HIKE_TYPE = "GET_STATE_FIELD";
const GET_HIKE_KIND = "GET_HIKE_KIND";
const GET_CATEGORY = "GET_CATEGORY";
const GET_MONTH = "GET_MONTH";
let initialState = {
    hikeType: '',
    hikeKind: '',
    category: '',
    month: ''
}
const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HIKE_KIND: return {...state, hikeKind: action.hikeKind}
        case SET_HIKE_TYPE: return {...state, hikeType: action.hikeType}
        case SET_CATEGORY:  return {...state, category: action.category}
        case SET_MONTH:     return {...state, month: action.month}
        case GET_HIKE_KIND: return state.hikeKind
        case GET_HIKE_TYPE: return state.hikeType
        case GET_CATEGORY:  return state.category
        case GET_MONTH:     return state.month
        default: return state
    }
}

export const updateField = (changeField,newValue) =>{

    return (dispatch) => {
        console.log(changeField);
        console.log(newValue);
        switch (changeField) {
            case "hikeType": {
                console.log(newValue);
                return dispatch(setHikeType(newValue))
            }
            case "hikeKind": return dispatch(setHikeKind(newValue))
            case "category": return dispatch(setCategory(newValue))
            case "month":   return dispatch(setMonth(newValue))
            default: return
        }
    }
}
export const setHikeKind = (hikeKind) =>({type: SET_HIKE_KIND, hikeKind})
export const setHikeType = (hikeType) =>({type: SET_HIKE_TYPE, hikeType})
export const setCategory = (category) =>({type: SET_CATEGORY, category})
export const setMonth = (month) =>({type: SET_MONTH, month})

export const getHikeKind = () =>({type: GET_HIKE_KIND})
export const getHikeType = () =>({type: GET_HIKE_TYPE})
export const getCategory = () =>({type: GET_CATEGORY})
export const getMonth = () =>({type: GET_MONTH})

export const handleSubmit=(event)=> {
    fetch('http://localhost:4000/test',
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                hikeType: getHikeType(),
                hikeKind: getHikeKind(),
                category: getCategory(),
                month: getMonth()
            })
        })
        .then(response => {
            return response.json();
        })
        .then(res => {
            console.log("I'm here")
            console.log({res});

            this.setState(res)
        })
}

export default testReducer;

