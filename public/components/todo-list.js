import React,{Component} from 'react';
export  default  class TodoList extends Component{
    delete(id){
        this.props.onDelete(id);
    }
    toggle(id){
        this.props.onToggle(id);
    }
    render(){
        const todos = this.props.todos.map((todo,index)=>{
            return <div key={index}>
                <input type="checkbox" checked={todo.isDone} onClick={this.toggle.bind(this, todo.id)}/>
                <span style={{"textDecoration":todo.isDone?'line-through':''}}>{todo.text}</span>
                <button onClick={this.delete.bind(this,todo.id)}>X</button>
            </div>
        });
        return <div>
            {todos}
        </div>
    }
}