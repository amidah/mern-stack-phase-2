import { combineReducers } from 'redux';

const todoListReducer = (state=[], action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [...state, action.payload];
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    todoList: todoListReducer
});

export default rootReducer;