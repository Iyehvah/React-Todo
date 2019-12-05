// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const List = props => {
    return(
        <div>
            {props.dos.map(item => (
                <Todo
                    toggleComplete={props.toggleItem}
                    key={item.id}
                    dos={item}
                />
            ))}
        </div>
    )
}

export default List;
