const DBInfo = (...info) => {
  let infos = {
    "host" : "",
    "user" : "",
    "password" : "",
    "database" : "",
    port: ""
  };

  for (let key in infos){
    infos[key] = info.shift();
  };

  return infos;
}

export default DBInfo