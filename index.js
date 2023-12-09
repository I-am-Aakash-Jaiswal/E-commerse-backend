const express = require('express');

const app = express();

app.get("/",(req,resp)=>{

const res = {
    class:"10",
    name: "Ansh"
}
resp.send(res);
})

app.listen(5000)