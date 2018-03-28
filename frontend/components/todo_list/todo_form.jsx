import React from 'react';
import todosReducer from '../../reducers/todos_reducer';

class CreateTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleIsDone = this.handleIsDone.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uniqueId = this.uniqueId.bind(this);
  }

  uniqueId() {
    return new Date().getTime();
  }

  handleTitleChange(e) {
    this.setState({title: e.target.value});
  }

  handleBodyChange(e) {
    this.setState({body: e.target.value});
  }

  handleIsDone(e) {
    this.setState({done: e.target.checked});
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.uniqueId());
    const todo = Object.assign({}, this.state, {id: this.uniqueId() });
    this.props.receiveTodo(todo);
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <label>Title:
            <input type="text"
              value={this.state.title}
              onChange={ this.handleTitleChange }/>
          </label>

          <label>Body:
            <input type="text"
              value={this.state.body}
              onChange={ this.handleBodyChange }/>
          </label>

          <label>Done:
            <input type="checkbox"
              value={this.state.done}
              onChange={ this.handleIsDone }/>
          </label>

          <input type="submit" value="Create todo!" />
        </form>
      </div>
    );
  }
}

export default CreateTodo;
