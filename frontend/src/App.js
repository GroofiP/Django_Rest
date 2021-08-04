import React from 'react';
import './App.css';
import axios from 'axios'
import UserList from './User'
import FooterList from "./Footer";
import ProjectList from "./components/Projects";
import TodoList from "./components/Todo";
import Cookies from 'universal-cookie';
import {HashRouter, Link, Route, Switch} from "react-router-dom";
import LoginForm from "./components/LoginForm";

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
            'token': '',
        }
    }

    is_auth() {
        return !!this.state.token
    }

    get_token_from_storage() {
        const cookie = new Cookies()
        this.setState({'token': cookie.get('token')}, this.get_data)
    }

    get_headers() {
        let header = {
            'Content-Type': 'application/json'
        }
        const cookie = new Cookies()

        header['Authorization'] = 'Token ' + cookie.get('token')

        return header;
    }

    get_data() {
        const headers = this.get_headers()

        axios.get('http://127.0.0.1:8000/api/users/', {headers})
            .then(
                response => {
                    const users = response.data.results
                    this.setState({
                        'users': users
                    })
                }
            ).catch(
            error => {
                this.setState({
                    'users': []
                })
                console.log(error)
            }
        )

        axios.get('http://127.0.0.1:8000/api/project/', {headers})
            .then(
                response => {
                    const projects = response.data.results
                    this.setState({
                        'projects': projects
                    })
                }
            ).catch(
            error => {
                this.setState({
                    'projects': []
                })
                console.log(error)
            }
        )

        axios.get('http://127.0.0.1:8000/api/todo/', {headers})
            .then(
                response => {
                    const todos = response.data.results
                    this.setState({
                        'todos': todos
                    })
                }
            ).catch(
            error => {
                this.setState({
                    'todos': []
                })
                console.log(error)
            }
        )
    }

    get_token(login, password) {
        axios.post('http://127.0.0.1:8000/api-token-auth/',
            {
                "username": login,
                "password": password
            })
            .then(
                response => {
                    const cookie = new Cookies()
                    cookie.set('token', response.data.token)
                    this.setState({'token': response.data.token}, this.get_data)
                }
            ).catch(
            error => console.log(error)
        )
    }

    logout() {
        const cookie = new Cookies()
        cookie.set('token', '')
        this.setState({'token': ''}, this.get_data)
    }

    componentDidMount() {
        this.get_token_from_storage()
    }

    divStyle = {
        padding: "25px 0px",
        textAlign: "left",
    }

    render() {
        return (
            <div className="App">
                <HashRouter>
                    <nav style={this.divStyle}>
                        <ul>
                            <li>
                                {this.is_auth() ? <button onClick={() => this.logout()}>Logout</button> :
                                    <Link to='/login'>Login</Link>}
                            </li>
                            <li>
                                <Link to='/'>Users</Link>
                            </li>
                            <li>
                                <Link to='/project'>Projects</Link>
                            </li>
                            <li>
                                <Link to='/todo'>Todo</Link>
                            </li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route exact path='/' component={() => <UserList users={this.state.users}/>}/>
                        <Route exact path='/login' component={() => <LoginForm
                            get_token={(login, password) => this.get_token(login, password)}/>}/>
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

