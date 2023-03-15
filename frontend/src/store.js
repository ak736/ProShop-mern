import { combineReducers, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension'
import thunk from 'redux-thunk'

const reducer = combineReducers({})

const initialState = {}

const middleware = [thunk]

const store = configureStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
