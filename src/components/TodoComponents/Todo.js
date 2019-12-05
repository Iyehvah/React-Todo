import React from "react";

const Todo = props => {
    return(
        <div
        className={`Todo${props.item.completed ? " completed" : ""}`}
        onClick={(e) => props.toggleItem(props.item.id)}
        >
            {props.item.title}
        </div>
    )
}

export default Todo;