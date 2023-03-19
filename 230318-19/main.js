import serveron from "./server.js"
import CreateDoc from "./CreateDoc.js";
// 위 모듈을 이용해서 태그생성

const property = {
  id : "root"
}

const formprop = {
  method : "GET",
  action : "/database"
}

const inputprop = {
  type : "text",
  name : "column"
}

const submitprop={
  type : "submit"
}

CreateDoc("div",document.body,property);
const root = document.getElementById('root');

CreateDoc("form",root,formprop);
const form = root.children[0];

CreateDoc("input",form,inputprop);
CreateDoc("input",form,submitprop);

serveron();