const supertest = require('supertest');

const app = require('./index');

const request = supertest(app);

test("Deve retornar 200 no GET /", async function(){
    const resposta = await request.get("/");
    expect(resposta.status).toBe(200);
});

test("Deve retornar 201 no POST /", async function(){
    const resposta = await request.post("/");
    expect(resposta.status).toBe(201);
});

test("Deve retornar 200 no PUT /", async function(){
    const resposta = await request.put("/");
    expect(resposta.status).toBe(200);
});

test("Deve retornar 204 no DELETE /", async function(){
    const resposta = await request.delete("/");
    expect(resposta.status).toBe(204);
});

