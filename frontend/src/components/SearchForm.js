import React from 'react'


class SearchForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "",
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        this.props.searchProject(this.state.text);
        event.preventDefault();
    }


    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <input type="text" name="text" placeholder="text" value={this.state.text}
                       onChange={(event) => this.handleChange(event)}/>
                <input type="submit" value="Search"/>
            </form>
        )
    }
}

export default SearchForm
