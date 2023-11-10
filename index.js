// // console.log("helool world");
// // repel is feature to expermenting node js code and debug data structure
// const EventEmitter = require("events");
// const event = new EventEmitter();
// // event.on("sayMyName", () => {
// //   console.log("your first name is Mayank");
// // });
// // event.on("sayMyName", () => {
// //   console.log("your first name is Singh");
// // });
// // event.on("sayMyName", () => {
// //   console.log("your first name is Rathore");
// // });
// // event.emit("sayMyName");
// event.on("sayMyName", (sc, msg) => {
//   console.log(`your first name is Rathore ${sc} ${msg}`);
// });
// event.emit("sayMyName", 200, "ok");
// // That being said, let's go ahead and create an EventEmitter. This can be done either via creating an instance of the class itself, or by implementing it through a custom class and then creating an instance of that class.

// // Creating an EventEmitter Object
// // Let's start off with a simple event-emitting object. We'll create an EventEmitter that will emit an event that contains information about the application's uptime, every second.
