const EventEmmiter = require("events");

const event = new EventEmmiter();

// Event Fire use for call any event multiple timess
event.on("EventFire", () => {
  console.log("eventFire1");
});
event.on("EventFire", () => {
  console.log("eventFire2");
});
event.on("EventFire", () => {
  console.log("eventFire3");
});
event.on("EventFire", () => {
  console.log("eventFire4");
});

event.emit("EventFire");

// Event Emmiter with Arguments and prametere
event.on("WithArgu", (status, msg) => {
  console.log(`status code is ${status} or message is ${msg}`);
});

event.emit("WithArgu", 200, "ok");
