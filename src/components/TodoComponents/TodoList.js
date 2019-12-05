import React from "react";
import Todo from "./Todo";

const List = props => {
    return (
        <div>
            {props.dos.map(item => {
                return <Todo item={item} key={item.id} toggleItem={props.toggleItem} />;
        })}
        </div>
    )
}

export default List;