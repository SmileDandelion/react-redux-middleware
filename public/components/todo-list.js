import React,{Component} from 'react';
export  default  class TodoList extends Component{
    delete(index){
        this.props.onDelete(index);
    }
    render(){
        const todos = this.props.todos.map((todo,index)=>{
            return <div key={index}>
                {todo.text}
                <button onClick={this.delete.bind(this,index)}>X</button>
            </div>
        });
        return <div>
            {todos}
        </div>
    }
}