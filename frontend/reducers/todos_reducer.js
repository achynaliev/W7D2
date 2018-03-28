import { RECEIVE_TODOS, RECEIVE_TODO } from "../actions/todo_actions";
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_TODOS:
      action.todos.forEach( (item) => {
        newState = merge(newState, {[item.id]: item});
      });
      return newState;

    case RECEIVE_TODO:
      const newTodo = {
        id: action.todo.id,
        title: action.todo.title,
        body: action.todo.body,
        done: action.todo.done
      };
      return merge(newState, {[newTodo.id]: newTodo});

    default:
      return state;
  }
};

export default todosReducer;
