import React, { Component } from "react";
import styled from 'styled-components';


const Btn = styled.button`
    color: green;
    padding: 10px;
    margin: 10px;
`;



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
                <Btn onClick={this.submitHandler}>Add</Btn>
                <Btn onClick={this.props.removeItem}>Remove</Btn>
            </form>
        )
    }
}

export default TodoForm;