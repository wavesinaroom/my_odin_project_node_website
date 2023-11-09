const http = require(`http`);
const fs = require(`fs`);

const hostname = `127.0.0.1`;
const port = 8080;

const server = http.createServer((req,res)=>{
  res.statusCode = 200;
  res.setHeader(`Content-Type`, `text/html`) ;
  let path;

  switch(req.url){
    case `/`:
      path = `./index.html`;
      break;
    case `/contact`:
      path = `./contact-me.html`;
      break;
    case `/about`:
      path = `./about.html`;
      break;
    default:
      path = `./404.html`;
      break;
  }
  fs.readFile(path,`utf-8`, (err,data)=>{
    if(err){
      console.log(err)
      return;
    }
    
    res.end(data);
  })
});

server.listen(port, hostname,()=>{
  console.log(`Server running at http://${hostname}:${port}`);
});
