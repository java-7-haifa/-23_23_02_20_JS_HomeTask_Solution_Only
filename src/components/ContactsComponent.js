import {getAllContacts} from '../utils/http'
import {getCurrToken} from '../utils/store'
let root;
export default function ContactsComponent(){
    root = document.createElement('div');
    loadContacts()
        .then(contacts => {
            dialog.hide();
            root.innerHTML = `
            <ul class="list-group">
            ${contacts.map(c => `<li class="list-group-item">${c.name}</li>`).join(' ')}
            </ul>
            `;
        }).catch(error => {
            dialog.hide();
        })

    return root;
}


function loadContacts(){
    dialog.show();
    return getAllContacts(getCurrToken())
    .then(body => {
        return body.contacts;
    })
}