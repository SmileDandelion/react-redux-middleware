import React from 'react';

export default class AddTodo extends React.Component{
    add(){
        this.props.onAdd(this.refs.input.value);
    }
    render(){
        return<div>
            <input type="text" ref="input"/>
            <button onClick={this.add.bind(this)}>+</button>
        </div>
    }
}