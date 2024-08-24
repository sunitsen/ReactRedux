import axios from "axios";
import { GET_TODOS_REQUEST, GET_TODOS_SUCCESS, GET_TODOS_FAILURE } from "../constants/todosConstants";

// Action creator using thunk
const getAllTodos = () => async (dispatch) => {
  dispatch({ type: GET_TODOS_REQUEST });
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    dispatch({ type: GET_TODOS_SUCCESS, payload: res.data.slice(0,8) });
  } catch (error) {
    dispatch({ type: GET_TODOS_FAILURE, payload: error.message });
  }
};

export default getAllTodos;
