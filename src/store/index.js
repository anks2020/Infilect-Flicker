import { createStore, applyMiddleware, compose } from 'redux';
import Thunk from 'redux-thunk';
import reducers from '../reducers/reducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export function configureStore(initialState) {

    const store = createStore(
        reducers,
        
        composeEnhancers(applyMiddleware(Thunk))
    );
    
    return store;
}