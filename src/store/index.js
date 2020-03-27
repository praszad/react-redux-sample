import { createStore } from 'redux';
import reducer from '../reducers';
const initialState = { count: '15' };
export const store = createStore(reducer, initialState);
