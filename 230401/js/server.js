import http from 'http';
import { contenthtml, contentcss, contentjs, intheresponse } from './module.js';
import fs from 'fs';

const html = fs.readFileSync('../index.html');
const login = fs.readFileSync('./login.js');
const main = fs.readFileSync('./main.js');
const module = fs.readFileSync('./module.js');

const server = http.createServer((request, response) => {
  if (request.method === 'GET') {
    if (request.url === '/') {
      console.log('open server port is 3000');
      intheresponse(response, contenthtml, `${html}<script src='./js/login.js' type='module'></script>`);
    }
    else if(request.url === '/js/login.js'){
      console.log('자스 파일 로딩');
      intheresponse(response, contentjs, login);
    }
    else if(request.url === '/js/main.js'){
      console.log('자스 파일 로딩');
      intheresponse(response, contentjs, main);
    }else if(request.url === '/js/module.js'){
      console.log('import 때문에 얘도 불러야하는건가!');
      intheresponse(response,contentjs,module)
    }
  }else if(request.method === ' POST '){
    if(request.url.startsWith('/login')){
      let datas = '';
      response.on('data',(data)=>{
        datas += data;
      })
      response.on('end',()=>{
        console.log(datas);
      })
      intheresponse(response,contenthtml,`${html}+<script src='./js/main.js' type='module'></script>`)
    }
  }
}).listen(3000)