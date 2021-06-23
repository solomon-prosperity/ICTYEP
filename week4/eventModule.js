const event = require('events');

// Create a new event emitter
const eventEmitter = new events.EventEmitter(); 

// Create an event handler:
var myEventHandler = () => {
    console.log('I hear a scream!')
}

// Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

// Fire the 'scream' event:
eventEmitter.emit('scream');


// https://www.twilio.com/docs/sms/quickstart/node
