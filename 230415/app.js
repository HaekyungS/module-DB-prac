import server from './server/controller.js'

server()
server.listen(3333,(err)=>{
  if(err) throw err
})