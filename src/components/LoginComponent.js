import {registration,login} from '../utils/http';
import {saveToken} from '../utils/store';

export default function LoginComponent(props){
    const root = document.createElement('div');
    root.style.width = '600px';
    root.style.margin = '100px auto';
    root.innerHTML = `
    <input id="email" type="text" class="form-control mb-3">
    <input id="password" type="text" class="form-control mb-3">
    <button id="regBtn" class="btn btn-primary">Registration</button>
    <button id="loginBtn" class="btn btn-success">Login</button>
    <div id="error" style="display:none" class="alert alert-danger mt-3"></div>
    `;

    let errorDiv = root.querySelector('#error');

    root.onclick = function(e){
        errorDiv.style.display = 'none';
        if(e.target.id === 'regBtn'){
            let email = root.querySelector('#email').value;
            let password = root.querySelector('#password').value;
            dialog.show();
            registration(email,password).then(body => {
                dialog.hide();
                saveToken(body.token);
                props.onSuccess();
            }).catch(error => {
                dialog.hide();
                errorDiv.innerHTML = error;
                errorDiv.style.display = 'block';
            })
        }else if(e.target.id === 'loginBtn'){
            let email = root.querySelector('#email').value;
            let password = root.querySelector('#password').value;
            dialog.show();
            login(email,password).then(body => {
                dialog.hide();
                saveToken(body.token);
                props.onSuccess();
            }).catch(error => {
                dialog.hide();
                errorDiv.innerHTML = error;
                errorDiv.style.display = 'block';
            })

        }
    }
    return root;
}