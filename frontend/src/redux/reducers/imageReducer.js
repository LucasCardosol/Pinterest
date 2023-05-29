import { 
    IMAGE_LIST_REQUEST,
    IMAGE_LIST_SUCCES,
    IMAGE_LIST_FAIL,
    IMAGE_REQUEST,
    IMAGE_SUCCES,
    IMAGE_FAIL
} from "../../constants/imageRedux.js"

export const ImageListReducer = (state = {data:[]}, action) => {
    switch(action.type){
        case IMAGE_LIST_REQUEST:
            return {loading:true, data:[]}

        case IMAGE_LIST_SUCCES:
            return { loading:false, data: action.payload }
        
        case IMAGE_LIST_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }
}

export const ImageReducer = (state = {data:[]}, action) => {
    switch(action.type){
        case IMAGE_REQUEST:
            return {loading:true, data:[]}

        case IMAGE_SUCCES:
            return { loading:false, data: action.payload }
        
        case IMAGE_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }
}

