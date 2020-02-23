const BASE_URL = 'https://contacts-telran.herokuapp.com';

export function registration(email,password){
    let body = {email,password};

    return fetch(`${BASE_URL}/api/registration`,{
        headers:{'Content-Type':'application/json; charset=utf-8'},
        method:'POST',
        body:JSON.stringify(body)
    }).then(response =>{
        return response.json().then(body => ({status:response.status,body:body}))
    }).then(({status,body}) => {
        if(status === 200){
            return body;
        }else if (status === 409 || status === 400){
            return Promise.reject(body.message);
        }else{
            console.error(status, body);
            return Promise.reject('Server error! Call to support');
        }
    });
}

export function login(email,password){
    let body = {email,password};

    return fetch(`${BASE_URL}/api/login`,{
        headers:{'Content-Type':'application/json; charset=utf-8'},
        method:'POST',
        body:JSON.stringify(body)
    }).then(response =>{
        return response.json().then(body => ({status:response.status,body:body}))
    }).then(({status,body}) => {
        if(status === 200){
            return body;
        }else if (status === 401 || status === 400){
            return Promise.reject(body.message);
        }else{
            console.error(status, body);
            return Promise.reject('Server error! Call to support');
        }
    });
}


export function getAllContacts(token){
    return fetch(`${BASE_URL}/api/contact`,{
        headers:{'Authorization':token}
    }).then(response =>{
        return response.json().then(body => ({status:response.status,body:body}))
    }).then(({status,body}) => {
        if(status === 200){
            return body;
        }else if (status === 401){
            return Promise.reject(body.message);
        }else{
            console.error(status, body);
            return Promise.reject('Server error! Call to support');
        }
    });
}