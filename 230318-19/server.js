import http from 'http';
export default serveron = () => {
  const server = http.createServer(function (request, response) {
    if (request.method === 'GET' && request.url === '/') {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end();
    }
    if (request.method === 'GET' && request.url.startsWith('/database')) {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end();
    }
  })

  server.listen(2080, function (error) {
    if (error) { console.error('서버 안돌아감') }
    else { console.log('서버 돌아감') }
  })
}