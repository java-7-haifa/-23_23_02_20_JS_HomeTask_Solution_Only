import render from './components/App'
import './styles/style.css';

window.dialog = {
    show:() => {
        document.querySelector('#progress-modal').style.display = 'block';
    },
    hide: () => {
        document.querySelector('#progress-modal').style.display = 'none';
    }
}

dialog.hide();

const root = document.querySelector('#root');
root.innerHTML = "";
root.appendChild(render());