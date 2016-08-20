import {connect} from 'react-redux';
import TodoList from  '../components/todo-list';

const mapStateToProps = (state)=>{
  return {
      todos:state.todos
  }
};

const mapDispatchToProps= (dispatch)=>{
    return {
        onDelete:(index)=>{
            dispatch({type:"DELETE",index});
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);