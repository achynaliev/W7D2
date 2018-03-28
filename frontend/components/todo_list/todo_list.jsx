import React from 'react';
import ToDoListItem from './todo_list_item';
import CreateTodo from './todo_form';

class TodoList extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <ul>
          {this.props.todos.map( (item) => (
              <ToDoListItem key={item.id} todo= {item}/>
          ))}

        </ul>
        <CreateTodo receiveTodo={this.props.receiveTodo}/>
      </div>
    );
  }
}

export default TodoList;
