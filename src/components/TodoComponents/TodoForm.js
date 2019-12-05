import React, { Component } from "react";

class TodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            itemText: ""
        }
    }
    
    changeHandler = (e) => {
        this.setState({itemText: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.addItem(this.state.itemText)
    }

    render() {
        return (
            <form onSubmit ={this.submitHandler}>
                <input 
                    type="text" name="itemText" value={this.state.itemText} onChange={this.changeHandler}
                />
                <button type="submit">Add</button>
            </form>
        )
    }
}

export default TodoForm;