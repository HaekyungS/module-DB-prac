export const createDoc=(tag,parents,props)=>{
  const element = document.createElement(tag);
  parents.appendChild(element)
  for(let attri in props){
    element.setAttribute(attri,props[attri])
  }
}