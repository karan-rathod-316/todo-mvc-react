import React from 'react';
import TodoForm from './TodoForm.js'
import Todo from './Todo.js'

export default class TodoList extends React.Component {
    state = {
        todos:[],
        todoToShow: "All",
    }

    addTodo = (todo)=>{        
    this.setState({
        todos:[todo, ...this.state.todos]   
    })    
    }
    
    toggleComplete = (id)=>{
        this.setState({
            todos:this.state.todos.map(todo=>{
                if(todo.id === id) {
                    return {
                        ...todo,
                        id:todo.id,
                        text:todo.text,
                        complete:!todo.complete    
                    }
                } else {
                    return todo
                }
            })
        })
    }

    updateTodoToShow = (string)=>{
        this.setState({
            todoToShow:string
        })
    }

    handleDeleteTodo= (id)=>{
        this.setState({
            todos:this.state.todos.filter(todo => todo.id !== id)
        })
    }

    removeCompletedTodos= (id)=>{
        this.setState({
            todos:this.state.todos.filter(todo => !todo.complete)
        })
    }

    render() {
        let todos=[];

        if(this.state.todoToShow==="All") {
            todos = this.state.todos;
        } else if (this.state.todoToShow==="Active"){
            todos = this.state.todos.filter(todo=>
                !todo.complete);
        } else if (this.state.todoToShow==="Complete"){
            todos = this.state.todos.filter(todo=>
                todo.complete);
        }

        return (<div className="main-container">
        <TodoForm onSubmit={this.addTodo}/>
       
        {todos.map(todo=>
        <Todo toggleComplete={()=>this.toggleComplete(todo.id)} 
        onDelete={()=>{this.handleDeleteTodo(todo.id)}}
        key={todo.id} 
        todo={todo}/>)}
        
        <div className="pending-todos-number">Pending Todos:{this.state.todos.filter(todo=>
        !todo.complete).length}
        </div>  

        <div>
            <button onClick={()=>{this.updateTodoToShow("All")}}>All</button>
            <button onClick={()=>{this.updateTodoToShow("Active")}}>Active</button>
            <button onClick={()=>{this.updateTodoToShow("Complete")}}>Complete</button>
        </div> 

        {this.state.todos.filter(todo =>todo.complete).length ?(
            <div>
            <button onClick={this.removeCompletedTodos}>Remove Completed</button>    
            </div>
            ):null}
        
        </div>
        )
    }
}