import React, { Component } from 'react';
// import Todo from "./components/TodoComponents/Todo";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      dos : [
      {
        title: "Complete Project",
        completed: false,
        id: 1
      },
      {
        title: "Grocery Shopping",
        completed: false,
        id: 2
      }
    ]
   }
  }

  toggleItem = itemId => {
    console.log("GOT IT!?", itemId);
    this.setState({ dos: this.state.dos.map( item => {
      if(itemId === item.id) {
        return {
          ...item,
          completed: !item.completed
        };
      }
      return item;
    })})
  };

  addItem = (itemText) => {
    const newItem = {
      title: itemText,
      completed: false,
      id: Date.now()
    }

    this.setState({
      dos: [...this.state.dos, newItem]
    })
  }
 


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          toggleItem={this.toggleItem}
          dos={this.state.dos}
        />
        <TodoForm  addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
