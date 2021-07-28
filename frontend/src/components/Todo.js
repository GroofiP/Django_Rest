import React from 'react'


const TodoItem = ({todo}) => {
    return (
        <tr>
            <td>{todo.id}</td>
            <td>{todo.headNote}</td>
            <td>{todo.textNote}</td>
            <td>{todo.created}</td>
            <td>{todo.updated}</td>
            <td>{todo.isActive}</td>
            <td>{todo.project}</td>
            <td>{todo.user}</td>
        </tr>
    )
}


const TodoList = ({todos}) => {
    return (
        <table>
            <th>ID</th>
            <th>HEAD_NOTE</th>
            <th>TEXT_NOTE</th>
            <th>CREATED</th>
            <th>UPDATED</th>
            <th>IS_ACTIVE</th>
            <th>PROJECT</th>
            <th>USERS</th>
            {todos.map((todo) => <TodoItem todo={todo} />)}
        </table>
    )
}


export default TodoList
