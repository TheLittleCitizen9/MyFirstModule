const _ = require('lodash')
const uuid = require('uuid')

var sharedStorage = {}

class InMemoryStorage{
    constructor(){
        this.storage = {}
    }
    create(collectionName, item){
        var storedItem = item
        storedItem._id = uuid.v4()
        if(collectionName in this.storage){
            this.storage[collectionName].push(storedItem)
        }else{
            this.storage[collectionName] = []
            this.storage[collectionName].push(storedItem)
        }
        return storedItem
    }

    find(collectionName, findFunc){
        var results = []
        for(var i=0; i<this.storage[collectionName].length; i++){
            results.push(_.find(this.storage[collectionName], (u) => findFunc(u)))
        }
        return results
    }

    where(collectionName, where){
        var results = []
        for(var i=0; i<this.storage[collectionName].length; i++){
            if(_.isMatch(this.storage[collectionName][i], where)){
                results.push(this.storage[collectionName][i])
            }
        }
        return results
    }

    remove(collectionName, findFunc){
        var copyStorage = this.storage[collectionName]
        var removed = []
        for(var i=0; i<this.storage[collectionName].length; i++){
            if(findFunc(this.storage[collectionName][i])){
                removed.push(this.storage[collectionName][i])
                copyStorage.splice(i, 1)
            }
        }
        return removed
    }
}

class InMemorySharedStorage{
    create(collectionName, item){
        var storedItem = item
        storedItem._id = uuid.v4()
        if(collectionName in sharedStorage){
            sharedStorage[collectionName].push(storedItem)
        }else{
            sharedStorage[collectionName] = []
            sharedStorage[collectionName].push(storedItem)
        }
        return storedItem
    }

    find(collectionName, findFunc){
        var results = []
        for(var i=0; i<sharedStorage[collectionName].length; i++){
            results.push(_.find(sharedStorage[collectionName], (u) => findFunc(u)))
        }
        return results
    }

    where(collectionName, where){
        var results = []
        for(var i=0; i<sharedStorage[collectionName].length; i++){
            if(_.isMatch(sharedStorage[collectionName][i], where)){
                results.push(sharedStorage[collectionName][i])
            }
        }
        return results
    }

    remove(collectionName, findFunc){
        var copyStorage = sharedStorage[collectionName]
        var removed = []
        for(var i=0; i<sharedStorage[collectionName].length; i++){
            if(findFunc(sharedStorage[collectionName][i])){
                removed.push(sharedStorage[collectionName][i])
                copyStorage.splice(i, 1)
            }
        }
        return removed
    }
}

module.exports = {
    InMemoryStorage,
    InMemorySharedStorage
}