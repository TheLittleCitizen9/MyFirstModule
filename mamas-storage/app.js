const inMemoryStorage = require("./index")

var storage = new inMemoryStorage.InMemoryStorage()

var storage2 = new inMemoryStorage.InMemoryStorage()

storage.create("users", {username: "dar", password: "CorHorse4"})

var f = (u) => u.username === "dar"

console.log(storage.find("users", f))

console.log(storage.remove("users", (u) => u.username === "dar"))

storage.create("users", {username: "yael", password: "CorHorse4"})

console.log(storage.where("users", {username:"yael"}))

console.log("=====================================")

storage2.create("users", {username: "dar", password: "CorHorse4"})

var f = (u) => u.username === "dar"

console.log(storage2.find("users", f))

console.log(storage2.remove("users", (u) => u.username === "dar"))

storage2.create("users", {username: "yael", password: "CorHorse4"})

console.log(storage2.where("users", {username:"yael"}))

console.log("=====================================")

var sharedStorage = new inMemoryStorage.InMemorySharedStorage()

sharedStorage.create("users", {username: "dar", password: "CorHorse4"})

var f = (u) => u.username === "dar"

console.log(sharedStorage.find("users", f))

console.log(sharedStorage.remove("users", (u) => u.username === "dar"))

sharedStorage.create("users", {username: "yael", password: "CorHorse4"})

console.log(sharedStorage.where("users", {username:"yael"}))

console.log("=====================================")

var sharedStorage2 = new inMemoryStorage.InMemorySharedStorage()

sharedStorage2.create("users", {username: "dar", password: "CorHorse4"})

var f = (u) => u.username === "dar"

console.log(sharedStorage2.find("users", f))

console.log(sharedStorage2.remove("users", (u) => u.username === "dar"))

sharedStorage2.create("users", {username: "yael", password: "CorHorse4"})

console.log(sharedStorage2.where("users", {username:"yael"}))