import dispatcher from '../dispatcher'

export function createTodo(title) {
  dispatcher.dispatch({
    type: "CREATE_TODO", 
    title: title
  })
}

export function deleteTodo(id) {
  dispatcher.dispatch({
    type: "DELETE_ACTION",
    id: id
  })
}
