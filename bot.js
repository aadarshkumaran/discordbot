const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  client.user.setActivity("Rickrolled" , {type:"WATCHING"})

  client.guilds.forEach((guild) => {
    console.log(" - " + guild.name)
    guild.channels.forEach((channel) => {
    console.log(` - ${channel.name} ${channel.type} ${channel.id}`)

    })

  })
  //chat channel id : 646740210801180682

})

client.on('message' , (receivedMessage) =>{
  if (receivedMessage.author ==client.user){
    return
  }
  receivedMessage.react("🌿")
  receivedMessage.react("🍪")

  if (receivedMessage.content.startsWith("!")){
    processCommand(receivedMessage)
  }

})

function processCommand(receivedMessage){
  let fullcommand = receivedMessage.content.substr(1)
  let splitCommand = fullCommand.split(" ")
  let primaryCommand = splitCommand[0]
  let arguments = splitCommand.slice(1)


}

client.login("ODY3ODAwNjExMjQ0MzQzMzI2.YPmYTA.ddAYw_U5c6uvRjHKH81KGVCdsm0");


///Greenja's server
 // - Text Channels category 869027584791441419
 // - Voice Channels category 869027584791441420
// - general text id 869027584791441421
 //- General voice 869027584791441422
