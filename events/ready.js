module.exports = async (client) => {
  console.log(`Online dah ${client.user.username}bot gila`);
  await client.user.setActivity("TAWURAN", {
    type: "PLAYING",//can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};
