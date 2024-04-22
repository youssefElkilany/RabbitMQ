const { sendMsg, reciveMsg } = require("./rabbit.js")

const queueName = "g3"
const msg = "hello4"

//sendMsg({queueName,msg})
reciveMsg({queueName})