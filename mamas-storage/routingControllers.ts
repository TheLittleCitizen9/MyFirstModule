import { get } from "http"

const inMemoryStorage = require("./index")

var storage = new inMemoryStorage.InMemorySharedStorage()

const __ = require('lodash')
import { JsonController, OnUndefined, Param, Body, Get, Post, Put, Delete } from 'routing-controllers'
import { StringDecoder } from "string_decoder"

@JsonController()
export class UserController{
    @Get("/api/users")
    getAllUsers(){
        return storage.find('users', (u) => u.firstName !== "")
    }

    @Post("/api/users/new")
    createUser(@Body() user:any){
        storage.create('users', )
    }
}

