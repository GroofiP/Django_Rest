import React from 'react'
import {Link} from "react-router-dom";


const TodoItem = ({todo, deleteTodo}) => {
    return (
        <tr>
            <td>{todo.id}</td>
            <td>{todo.headNote}</td>
            <td>{todo.textNote}</td>
            <td>{todo.created}</td>
            <td>{todo.updated}</td>
            <td>{todo.project}</td>
            <td>{todo.user}</td>
            <td>
                <button onClick={() => deleteTodo(todo.id)} type='button'>Delete</button>
            </td>
        </tr>
    )
}


const TodoList = ({todos, deleteTodo, divStyle}) => {
    return (
        <div>
            <table>
                <th>ID</th>
                <th>HEAD_NOTE</th>
                <th>TEXT_NOTE</th>
                <th>CREATED</th>
                <th>UPDATED</th>
                <th>PROJECT</th>
                <th>USERS</th>
                <th>

                </th>
                {todos.map((todo) => <TodoItem todo={todo} deleteTodo={deleteTodo}/>)}
            </table>
            <div style={divStyle}>
                <Link to='/todo/create'>Create</Link>
            </div>
        </div>
    )
}


export default TodoList
