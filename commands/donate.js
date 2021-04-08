const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "donate1",
    description: "Donate bebernyanyi xixixi",
    usage: "[donate1]",
    aliases: ["inv"],
  },

  run: async function (client, message, args) {
    
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 37080128;
    
    let invite = new MessageEmbed()
    .setTitle(`Donate @Bebernyanyi#9611`)
    .setDescription(`Want Donate Bebernyanyi? Donate Now xixixi! \n\n [Donate Link](https://saweria.co/bebernyanyi)`)
    .setURL(`https://saweria.co/bebernyanyi`)
    .setColor("BLUE")
    return message.channel.send(invite);
  },
};
