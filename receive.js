const amqp = require("amqplib/callback_api");

amqp.connect("amqp://localhost", (error, connection) => {
    connection.createChannel((error, channel) => {
        const queue = "hello";

        channel.assertQueue(queue, { durable: false })
        console.log(` [*] Waiting for messages in ${queue}. To exit, press CTRL+C`);
        channel.consume(queue, message => {
            console.log(` [x] Received ${message.content}`);
        }, { noAck: true });
    })
})
