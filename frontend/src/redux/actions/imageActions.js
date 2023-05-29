import axios from 'axios'
import { baseURL } from "../../constants/baseURL.js"
import { 
    IMAGE_LIST_REQUEST,
    IMAGE_LIST_SUCCES,
    IMAGE_LIST_FAIL,
    IMAGE_REQUEST,
    IMAGE_SUCCES,
    IMAGE_FAIL
} from "../../constants/imageRedux.js"

export const getImages = () => async(dispatch) => {
    try{
        dispatch({type: IMAGE_LIST_REQUEST })
        const {data} = await axios.get(`${baseURL}/api/images/`)
        
        dispatch({
            type:IMAGE_LIST_SUCCES,
            payload: data
        })
    }catch(error){
        dispatch({
            type: IMAGE_LIST_FAIL,
            payload: error.response && error.response.data.message ?
            error.response.data.message : error.message
        })
    }
}

export const getImage = (id) => async(dispatch) => {
    try{
        dispatch({type: IMAGE_REQUEST })
        const {data} = await axios.get(`http://127.0.0.1:8000/api/images/${id}/`)
        
        dispatch({
            type:IMAGE_SUCCES,
            payload: data
        })
    }catch(error){
        dispatch({
            type: IMAGE_FAIL,
            payload: error.response && error.response.data.message ?
            error.response.data.message : error.message
        })
    }
}



