const CreatDoc = (tag, parents,sty) => {
  const element = document.createElement(tag);
  for(let stytag in sty){
    element.style[stytag] = sty[stytag];
  }
  parents.appendChild(element);
};

const divstyle = {
  width: "100px",
  height: "100px",
  backgroundColor: "black",
};

CreatDoc("div", document.body,divstyle);

// for (let styleTag in divstyle) {
//   document.body.children[1].style.styleTag = `"${divstyle[styleTag]}"`;
// }

// document.body.children[1].style.width = "100px";
