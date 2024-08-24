import { GET_TODOS_REQUEST, GET_TODOS_SUCCESS, GET_TODOS_FAILURE } from "../constants/todosConstants";

const initialState = {
    todos: [],
    isLoading: false,
    error: null
};

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case GET_TODOS_SUCCESS:
            return {
                ...state,
                todos: action.payload,
                isLoading: false,
                error: null,
            };
        case GET_TODOS_FAILURE:
            return {
                ...state,
                todos: [],
                isLoading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default todosReducer;
