import React from "react";

const Todo = props => {
    return(
        <div
        className={`Todo${props.dos.completed ? " completed" : ""}`}
        onClick={() => props.toggleItem(props.item.id)}
        >
            {props.dos.title}
        </div>
    )
}

export default Todo;