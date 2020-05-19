import { FETCH_TODOS, ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions';

//state 객체 초기값 설정
const initialState = {
    //todos 상태변수 
    todos: [
        {
            id: 0,
            text: '',
            checked: false,
        }
    ]
}

//reducer 함수
export const toDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TODOS:
            //return Object.assign({}, state, { todos: action.payload });
        case REMOVE_TODO:
        case TOGGLE_TODO:    
        case ADD_TODO:
            return Object.assign({}, state, { todos: action.payload });
        default:
            return state;
    }
}