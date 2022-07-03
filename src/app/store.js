import { compose,applyMiddleware,createStore } from '@reduxjs/toolkit';
import { courseReducer } from './courses/courses.reducer';
import thunk from 'redux-thunk';

const middlewares=[thunk]
const composedEnhancer=compose(applyMiddleware(...middlewares))

const initalState = {

}

export const store = createStore(courseReducer,undefined,composedEnhancer);