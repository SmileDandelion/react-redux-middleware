import request from 'superagent';

export default function (store) {
    return function (next) {
        return function (action) {
            if (action.type === 'ADD') {
                request.post('/todo')
                    .send({text:action.text})
                    .end((err,res)=>{
                        next({type:"GETTODOS",todos:res.body});
                    })
            }
            if (action.type === 'DELETE') {
                request.delete('/todo')
                    .send({index:action.index})
                    .end((err,res)=>{
                        next({type:"GETTODOS",todos:res.body});
                    })
            }
            if (action.type === 'GETTODOS') {
                request.get('/todos')
                    .end((err,res)=>{
                        next({type:"GETTODOS",todos:res.body});
                    })
            }

        }
    }
}
