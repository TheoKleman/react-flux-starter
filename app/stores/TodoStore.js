import { EventEmitter } from "events"
import dispatcher from '../dispatcher'

class TodoStore extends EventEmitter {
  constructor() {
    super()

    this.data = [
      {
        id: 32,
        title: "Element number 1"
      }
    ]
  }

  createTodo(text) {
    const id = Date.now()

    this.data.push({
      id, 
      title: text
    })

    this.emit('change')
  }

  getAll() {
    return this.data
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_TODO": {
        this.createTodo(action.title)
      }
    }
  }

}

const todoStore = new TodoStore

dispatcher.register(todoStore.handleActions.bind(todoStore))
window.dispatcher = dispatcher

export default todoStore
