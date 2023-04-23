import {createDoc} from "../modules/createDoc.js";

createDoc("div", document.body);
createDoc("form", document.body.children[1], {
  id: "form",
  action: "gogo",
  method: "POST",
});
const form = document.getElementById("form");

createDoc("input", form, {
  type: "text",
  name: "id",
  placeholder:"아이디"
});

createDoc("input", form, {
  type: "password",
  name: "pass",
  placeholder:"비밀번호"
});

createDoc("input", form, {
  type: "text",
  name: "name",
  placeholder:"이름"
});

createDoc("input", form, {
  type: "number",
  name: "age",
  placeholder:"나이"
});

createDoc("input", form, {
  type: "submit",
  value: "DB로 보내버리기",
});
