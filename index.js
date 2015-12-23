var menubar = require('menubar');

var mb = menubar({
  index: 'file://' + __dirname + '/index.html',
  preloadWindow: true
});

mb.on('ready', function ready () {
  mb.window.setSize(480, 400);
});
