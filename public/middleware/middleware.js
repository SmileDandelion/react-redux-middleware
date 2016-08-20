import request from 'superagent';

export default function (store) {
    return function (next) {
        return function (action) {
            if (action.type === 'ADD') {
                request.post('/todo')
                    .send({text:action.text})
                    .end((err,res)=>{
                        next({type:"ADD",todos:res.body});
                    })
            }
        }
    }
}
