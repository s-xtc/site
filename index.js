// /index.js

const server = require('server');
const { get, socket } = server.router;
const { render } = server.reply;

const updateCounter = ctx => {
  ctx.io.emit('count', ctx.io.sockets.sockets.length);
};

server([
  // For the initial load render the index.html
  get('/', ctx => render('index.html')),

  // Join/leave the room
  socket('connect', updateCounter),
  socket('disconnect', updateCounter)
]);
