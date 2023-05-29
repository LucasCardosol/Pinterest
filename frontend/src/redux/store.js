import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { ImageListReducer , ImageReducer} from './reducers/imageReducer'


const reducer = combineReducers({
  imageList: ImageListReducer,
  image: ImageReducer,
  
})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducer, initialState, 
    composeWithDevTools(applyMiddleware(...middleware)))

export default store