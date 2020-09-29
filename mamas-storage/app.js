const inMemoryStorage = require("./index")

var storage = new inMemoryStorage.InMemorySharedStorage()
const express = require('express')
const port = 3000
const app = express()

app.get('/api/users', (req, res) => {
    var users = storage.find('users', (u) => u.firstName !== "")
    res.send({users})
})

app.post('/api/users/new', (req, res) => {
    storage.create('users', req.query)
    res.send('User created successfully')
})

app.get('/api/tests', (req, res) => {
    var tests = storage.find('tests', (u) => u.id === req.query.id)
    res.send(tests)
})

app.post('/api/tests/new', (req, res) => {
    storage.create('tests', req.query)
    res.send('Tests created successfully')
})

var server = app.listen(port, function(){
    var host = server.address().address
    var port = server.address().port
})
// var storage2 = new inMemoryStorage.InMemoryStorage()

// storage.create("users", {username: "dar", password: "CorHorse4"})

// var f = (u) => u.username === "dar"

// console.log(storage.find("users", f))

// console.log(storage.remove("users", (u) => u.username === "dar"))

// storage.create("users", {username: "yael", password: "CorHorse4"})

// console.log(storage.where("users", {username:"yael"}))

// console.log("=====================================")

// storage2.create("users", {username: "dar", password: "CorHorse4"})

// var f = (u) => u.username === "dar"

// console.log(storage2.find("users", f))

// console.log(storage2.remove("users", (u) => u.username === "dar"))

// storage2.create("users", {username: "yael", password: "CorHorse4"})

// console.log(storage2.where("users", {username:"yael"}))

// console.log("=====================================")

// var sharedStorage = new inMemoryStorage.InMemorySharedStorage()

// sharedStorage.create("users", {username: "dar", password: "CorHorse4"})

// var f = (u) => u.username === "dar"

// console.log(sharedStorage.find("users", f))

// console.log(sharedStorage.remove("users", (u) => u.username === "dar"))

// sharedStorage.create("users", {username: "yael", password: "CorHorse4"})

// console.log(sharedStorage.where("users", {username:"yael"}))

// console.log("=====================================")

// var sharedStorage2 = new inMemoryStorage.InMemorySharedStorage()

// sharedStorage2.create("users", {username: "dar", password: "CorHorse4"})

// var f = (u) => u.username === "dar"

// console.log(sharedStorage2.find("users", f))

// console.log(sharedStorage2.remove("users", (u) => u.username === "dar"))

// sharedStorage2.create("users", {username: "yael", password: "CorHorse4"})

// console.log(sharedStorage2.where("users", {username:"yael"}))