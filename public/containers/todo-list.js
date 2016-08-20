import {connect} from 'react-redux';
import TodoList from  '../components/todo-list';

const mapStateToProps = (state)=>{
  return {
      todos:state.todos
  }
};

const mapDispatchToProps= (dispatch)=>{
    return {
        onDelete:(id)=>{
            dispatch({type:"DELETE",id});
        },
        onToggle:(id)=> {
            console.log(id)
            dispatch({type: 'TOGGLE', id});
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);