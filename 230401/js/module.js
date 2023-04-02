const contenthtml = {
  'Content-Type': 'text/html'
}
const contentcss = {
  'Content-Type': 'text/css'
}
const contentjs = {
  'Content-Type': 'text/javascript'
}

const intheresponse = (response, content, page) => {
  response.writeHead(200, content);
  response.write(page);
  response.end();
}

const createDoc = (tag, parent, prop) => {
  const element = document.createElement(tag);
  parent.appendChild(element);
  for (let attri in prop) {
    element.setAttribute(attri, prop[attri]);
  }
}

export { contenthtml, contentcss, contentjs, intheresponse, createDoc }