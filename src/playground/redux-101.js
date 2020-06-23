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

// setCount
// resetCount

const store = createStore((state = { count: 0 }, action ) => {

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
});

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(incrementCount());

store.dispatch({
    type: 'RESET'
});

store.dispatch( decrementCount() );
store.dispatch( decrementCount({ decrementBy: 10 }) );

store.dispatch({
    type: 'SET',
    count: 101
});