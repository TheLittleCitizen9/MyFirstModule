const inMemoryStorage = require("./index")

var storage = new inMemoryStorage.InMemoryStorage()

storage.create("users", {username: "dar", password: "CorHorse4"})

console.log(storage.find("users", (u) => {
    return u.username === "dar"
}))