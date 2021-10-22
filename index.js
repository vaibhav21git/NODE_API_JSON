const fs  = require("fs");
const http = require("http");

const server = http.createServer((req,res)=>
{
    if(req.url == '/')
    {
        res.end("hi i am a home page");
    }
    else if(req.url == '/userapi')
    {
      fs.readFile(`${__dirname}/userapi.json`,"utf-8",(err,data)=>
      {
          console.log(data);
            //  const objdata = JSON.parse(data);
            //   const hapy =   JSON.stringify(objdata);
            //   const ob  = JSON.parse(hapy);
            // error if i wan to convert json into object then res.end(object is showing error);
          res.end(data);
      });
      
    }
    else
    {
       res.end('<h1>404 page does not exist</h1>');
    }
})

server.listen(8000,"127.0.0.1",()=>
{
    console.log("hi there!!!!!!!!!");
})

