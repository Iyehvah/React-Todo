import React from "react";
import Todo from "./Todo";
import styled from 'styled-components';

const Items = styled.div`
    font-size: 1.5rem;
    color: red;
`;
const List = props => {
    return (
        <Items>
            {props.dos.map(item => {
                return <Todo item={item} key={item.id} toggleItem={props.toggleItem} />;
        })}
        </Items>
    )
}

export default List;