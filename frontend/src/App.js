import React from 'react';
import './App.css';
import axios from 'axios'
import UserList from './User'
import MenuList from "./Menu";
import FooterList from "./Footer";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'users': []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/users/')
            .then(response => {
                const users = response.data
                this.setState(
                    {
                        'users': users
                    }
                )
            }).catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <Menu/>
                <UserList users={this.state.users}/>
                <Footer/>
            </div>
        )
    }
}


class Menu extends React.Component {
    divStyle = {
        padding: "25px 0px",
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

