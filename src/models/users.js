const fs = require("fs");
const User = {
    fileName:"./data/users.json",

    getData: function(){
        return JSON.parse(fs.readFileSync(this.fileName,"utf-8"));
    },

    findAll:function(){
        return this.getData
    },
    
    findByPk: function (id){
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id );
        return userFound;
    },
    findByPk:function(id){
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;

    },
    findByField:function(field,text){
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound;

    },
    create: function (UserData){

    }
}

console.log(User.findByField("apellido","nombre"));