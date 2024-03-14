const express = require('express');

const app = express();

app.use(express.json());

//middleware de rota
app.get("/", function(req, res){
    res.status(200).send("VOCÊ FEZ UMA REQUISIÇÃO GET");
});

app.post("/", function(req, res){
    res.status(201).send("VOCÊ FEZ UMA REQUISIÇÃO POST")
});

app.put("/", function(req, res){
    res.status(200).send("VOCÊ FEZ UMA REQUISIÇÃO PUT")
});

app.delete("/", function(req,res){
    res.status(204).send("VOCÊ FEZ UMA REQUISIÇÃO DELETE")
});

app.listen(3000);

module.exports = app;
