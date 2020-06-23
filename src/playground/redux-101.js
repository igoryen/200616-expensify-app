import { createStore } from 'redux';

// Action generators

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

// Reducers
// Reducer functions must 
// 1. be 'pure' functions
// 2. never change or mutate state or action
 
const countReducer = (state = { count: 0 }, action ) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'SET': 
            return {
                count: action.count
            }
        case 'RESET': 
            return {
                count: 0
            }
        default: 
            return state; // return the current state
    }
};

const store = createStore( countReducer );

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(incrementCount());
store.dispatch( resetCount());
store.dispatch( decrementCount() );
store.dispatch( decrementCount({ decrementBy: 10 }) );
store.dispatch( setCount( {count: -100} ));
