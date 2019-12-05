import React from "react";

const Todo = props => {
    return(
        <div
        // className={`Todo${props.item.completed ? " completed" : ""}`}
        // onClick={() => props.toggleItem(props.item.id)}
        style={props.item.completed ? { textDecoration: 'line-through' } : null}
        onClick={() => props.toggleItem(props.item.id)}
        >
            {props.item.title}
        </div>
    )
}

export default Todo;