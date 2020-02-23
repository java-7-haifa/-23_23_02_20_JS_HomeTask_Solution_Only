import {getCurrToken, clearToken} from '../utils/store'
import LoginComponent from './LoginComponent'
import ContactsComponent from './ContactsComponent';
let root;

export default function render(){
    root = document.createElement('div');
    root.classList.add('container');
    reRender();
    return root;
}

function onSuccess(){
    reRender();
}

function logout(){
    clearToken();
    reRender();
}

function reRender(){
    if(getCurrToken()){
        root.innerHTML = `
        <button id="logoutBtn" class="btn btn-danger">logout</button>
        `;
        root.appendChild(ContactsComponent());
        root.querySelector('#logoutBtn').onclick = logout;
    }else{
        root.innerHTML = '';
        root.appendChild(LoginComponent({onSuccess:onSuccess}));
    }
}