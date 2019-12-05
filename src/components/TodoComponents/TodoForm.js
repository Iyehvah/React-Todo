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
        this.setState({itemText: ""});
    }

    render() {
        return (
            <form>
                <input 
                    type="text" name="itemText" value={this.state.itemText} onChange={this.changeHandler}
                />
                <button onClick={this.submitHandler}>Add</button>
                <button onClick={this.props.removeItem}>Remove Completed</button>
            </form>
        )
    }
}

export default TodoForm;