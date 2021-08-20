import React from 'react'


class ProjectForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {name: "", linkRepository: "", users: []}
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        this.props.createProject(this.state.name, this.state.linkRepository, this.state.users);
        event.preventDefault();
    }

    handleUsersChange(event) {
        if (!event.target.selectedOptions) {
            this.setState({
                'users': []
            })
            return;
        }
        console.log(this.state.name)
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
                <input type="text" name="name" placeholder="Name" value={this.state.name}
                       onChange={(event) => this.handleChange(event)}/>
                <input type="text" name="linkRepository" placeholder="Link_Repository" value={this.state.linkRepository}
                       onChange={(event) => this.handleChange(event)}/>
                <select multiple name="users"  onChange={(event) => this.handleUsersChange(event)}>
                    {this.props.users.map((user) => <option value={user.id}>{user.username}</option>)}
                </select>
                <input type="submit" value="Create"/>
            </form>
        )
    }
}

export default ProjectForm
