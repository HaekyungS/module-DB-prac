const CreateDoc = (tag, parents, property) => {
    let element = document.createElement(tag);
    parents.appendChild(element);
    if(property){
      for(let key in property){
        element.setAttribute(key,property[key]);
      }
    }
    return element;
  }

  export default CreateDoc;

  // 태그생성 모듈