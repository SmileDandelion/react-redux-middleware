export default function reducer(state={todos:[]},action){
    switch (action.type){
        case "GETTODOS":
            return {todos:action.todos}
    }
    return state;
}