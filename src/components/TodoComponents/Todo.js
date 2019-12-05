import React from "react";

const Todo = props => {
    return(
        <div
        className={`Todo${props.item.completed ? " completed" : ""}`}
        onClick={props.toggleItem}
        >
            {props.item.title}
        </div>
    )
}

export default Todo;