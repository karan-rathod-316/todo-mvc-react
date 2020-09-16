import React from 'react';
import TodoList from './components/TodoList.js';

class App extends React.Component{
  render (){
    return (
    <div className="App">
      <TodoList />
    </div>
  )
  }
}

export default App;
