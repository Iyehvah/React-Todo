import React, { Component } from 'react';
// import Todo from "./components/TodoComponents/Todo";
import TodoList from "./components/TodoComponents/TodoList";

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
        id: Date.now()
      },
      {
        title: "Grocery Shopping",
        completed: false,
        id: Date.now()
      }
    ]
   }
  }

  toggleItem = () => {
    console.log("GOT IT!?")
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          handleComplete={this.toggleItem}
          dos={this.state.dos}
        />
      </div>
    );
  }
}

export default App;
