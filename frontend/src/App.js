import React from 'react';
import './App.css';
import axios from 'axios'
import UserList from './User'
import MenuList from "./Menu";
import FooterList from "./Footer";
import ProjectList from "./components/Projects";
import TodoList from "./components/Todo";
import {HashRouter, Route, Switch} from "react-router-dom";

const NotFound404 = ({location}) => {
    return (
        <div>
            <h1>Страница по адресу '{location.pathname}' не найдена</h1>
        </div>
    )
}


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'users': [],
            'projects': [],
            'todos': [],
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/users/')
            .then(response => {
                this.setState({users: response.data.results})
            }).catch(error => console.log(error))
        axios.get('http://127.0.0.1:8000/api/project/')
            .then(response => {
                this.setState({projects: response.data.results})
            }).catch(error => console.log(error))
        axios.get('http://127.0.0.1:8000/api/todo/')
            .then(response => {
                this.setState({todos: response.data.results})
            }).catch(error => console.log(error))
    }

    render() {
        return (
            <div className="App">
                <div>
                    <Menu/>
                </div>
                <HashRouter>
                    <Switch>
                        <Route exact path='/' component={() => <UserList users={this.state.users}/>}/>
                        <Route exact path='/project' component={() => <ProjectList projects={this.state.projects}/>}/>
                        <Route exact path='/todo' component={() => <TodoList todos={this.state.todos}/>}/>
                        <Route component={NotFound404}/>
                    </Switch>
                </HashRouter>
                <Footer/>
            </div>
        )
    }
}


class Menu extends React.Component {
    divStyle = {
        padding: "25px 0px",
        textAlign: "left",
    };

    render() {
        return (
            <div style={this.divStyle}>
                <MenuList/>
            </div>
        )
    }
}


class Footer extends React.Component {
    divStyle = {
        padding: "25px 0px",
        textAlign: "left",
    };

    render() {
        return (
            <div style={this.divStyle}>
                <FooterList/>
            </div>
        )
    }
}

export default App;

