import { createDoc } from "./module.js";


createDoc('div', document.body);

const formprop = {
  'method': 'POST',
  'action': '/login',
  'id': 'formtag'
}

createDoc('form', document.body.children[1], formprop);
const formtag = document.getElementById('formtag');

const inputtextprop = {
  'type': 'text',
  'name': 'id'
}

createDoc('input', formtag, inputtextprop);

const inputpassprop = {
  'type': 'password',
  'name': 'password'
}

createDoc('input', formtag, inputtextprop);

const inputsubmitprop = {
  'type': 'submit',
  'value': '로그인'
}

createDoc('input', formtag, inputsubmitprop);

