const connect = require('connect');
const serveStatic = require('serve-static');
const open = require('open');

connect().use(serveStatic(__dirname)).listen(8080, async function(){
    console.log('Server running on 8080...');
    await open('http://localhost:8080/');
});