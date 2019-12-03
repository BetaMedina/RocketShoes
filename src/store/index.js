import { createStore } from 'redux';
import reducers from './modules/rootReducer';
import Reactotron from '../config/reactotronConfig';

export default createStore(reducers, Reactotron.createEnhancer());
