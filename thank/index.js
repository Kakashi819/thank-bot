const express=require("express")
const mongoose=require("mongoose")
const app=express()
const User = require('./User');

const mongoURI="mongodb://127.0.0.1:27017/code-cast"
const connectToMongo = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(mongoURI) 
        console.log('Mongo connected')
    }
    catch(error) {
        console.log(error)
        process.exit()
    }
}

connectToMongo();


const user= new User({
    name:"ayush",
    authorId:1,
    count:0,
})

user.save((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('User created Successfully');
    }
})




const config = require("./config.json")
const { Client, GatewayIntentBits, VoiceChannel, TextChannel } = require('discord.js');
const command = require("./command.js")


const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.DirectMessages,
	],
});
 



client.on('ready',()=>{
    console.log("bot is ready")

    //register command
    command(client,'rg',msg=>{
        console.log(msg);
    })
})



client.login(config.token);