import React from 'react'


class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            headNote: "",
            textNote: "",
            isActive: true,
            created: "",
            updated: "",
            project: "",
            user: ""
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        this.props.createTodo(this.state.headNote, this.state.textNote, this.state.projects, this.state.users);
        event.preventDefault();
    }

    handleUsersChange(event) {
        if (!event.target.selectedOptions) {
            this.setState({
                'users': []
            })
            return;
        }
        let users = []
        for (let i = 0; i < event.target.selectedOptions.length; i++) {
            users.push(event.target.selectedOptions.item(i).value)
        }
        this.setState({
            'users': users
        })
    }



    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <input type="text" name="headNote" placeholder="headNote" value={this.state.headNote}
                       onChange={(event) => this.handleChange(event)}/>
                <input type="text" name="textNote" placeholder="textNote" value={this.state.textNote}
                       onChange={(event) => this.handleChange(event)}/>
                <select name="projects" onChange={(event) => this.handleChange(event)}>
                    {this.props.projects.map((project) => <option value={project.id}>{project.name}</option>)}
                </select><select name="users" onChange={(event) => this.handleChange(event)}>
                {this.props.users.map((user) => <option value={user.id}>{user.username}</option>)}
            </select>
                <input type="submit" value="Create"/>
            </form>
        )
    }
}

export default TodoForm
