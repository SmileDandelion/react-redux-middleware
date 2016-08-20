export default function reducer(state={todos:[]},action){
    switch (action.type){
        case "ADD":
            return {todos:[...state.todos,{text:action.text,isDone:false}]}
        case 'DELETE':
            state.todos.splice(action.index,1);
            return {todos:[...state.todos]}
    }
    return state;
}