const inMemoryStorage = require("./index")

var storage = new inMemoryStorage.InMemoryStorage()

storage.create("users", {username: "dar", password: "CorHorse4"})

var f = (u) => u.username === "dar"

console.log(storage.find("users", f))

console.log(storage.remove("users", (u) => u.username === "dar"))

storage.create("users", {username: "yael", password: "CorHorse4"})

console.log(storage.where("users", {username:"yael"}))