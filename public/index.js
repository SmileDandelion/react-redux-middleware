import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer/reducer';
import AddTodo from './containers/add-todo';
import TodoList from './containers/todo-list';
import middleware from './middleware/middleware';
import Footer from './containers/footer';

const createStoreMiddleware = applyMiddleware(middleware)(createStore);
const store = createStoreMiddleware(reducer);

class App extends Component {
    componentDidMount(){
        store.dispatch({type:'GETTODOS'})
    }
    render() {
        return <div>
            <AddTodo/>
            <TodoList/>
            <Footer/>
        </div>
    }
}

render(<Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));