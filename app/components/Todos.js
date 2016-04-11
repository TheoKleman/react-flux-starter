import React from "react"

import TodoStore from '../stores/TodoStore'
import * as TodoActions from '../actions/TodoActions'

export default class Todos extends React.Component {
  constructor() {
    super()

    this.state = {
      todos: TodoStore.getAll()
    }
  }

  componentWillMount() {
    TodoStore.on('change', () => {
      this.setState({
        todos: TodoStore.getAll()
      })
    })
  }

  createTodo() {
    TodoActions.createTodo(Date.now())
  }

  render() {
    return (
      <div>
        <h2>Todos</h2>
        <button onClick={this.createTodo.bind(this)}>Create</button>
        <div>
          {
            this.state.todos.map((singleTodo, i) => {
              return <li key={i}>{ singleTodo.title }</li>
            })
          } 
        </div>
      </div>
    )
  }
}
