import request from 'superagent';

export default function (store) {
    return function (next) {
        return function (action) {
            switch (action.type) {
                case 'ADD':
                    request.post('/todo')
                        .send({text: action.text})
                        .end((err, res)=> {
                            next({type: "GETTODOS", todos: res.body});
                        });
                    break;
                case 'DELETE':
                    request.delete('/todo')
                        .send({id: action.id})
                        .end((err, res)=> {
                            next({type: "GETTODOS", todos: res.body});
                        });
                    break;
                case 'GETTODOS' :
                    request.get('/todos')
                        .end((err, res)=> {
                            next({type: "GETTODOS", todos: res.body});
                        });
                    break;
                case 'TOGGLE' :
                    request.put('/todos')
                        .send({id:action.id})
                        .end((err, res)=> {
                            next({type: "GETTODOS", todos: res.body});
                        });
                    break;
                case 'FILTER' :
                    request.post('/filterTodos')
                        .send({filterName:action.filterName})
                        .end((err, res)=> {
                            console.log(res.body);
                            next({type: "GETTODOS", todos: res.body});
                        });
            }

        }
    }
}
