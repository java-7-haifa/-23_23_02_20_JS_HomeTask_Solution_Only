const TOKEN_KEY = 'token';


export function saveToken(token){
    localStorage.setItem(TOKEN_KEY,token);
}

export function getCurrToken(){
    return localStorage.getItem(TOKEN_KEY);
}

export function clearToken(){
    localStorage.clear();
}