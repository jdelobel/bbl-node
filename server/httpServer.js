'use strict';

const { createServer } = require('http');

const server = createServer((request, response) => {
	response.writeHead(200, { 'Content-Type': 'text/plain' });
	response.end('Hello World\n');
	throw new TypeError('Hello World execption');
});

server.listen(3000, () => console.log(`Adresse du serveur : http://localhost:3000`));

server.on('error', (err) => {
	console.log(`Server error: ${err}`);
});

process.on('uncaughtException', (err) => {
	console.log(`UncaughtException error: ${err}`);
});
