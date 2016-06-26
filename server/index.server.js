'use strict';
const express = require('express');
const app = require('express')();
const compression = require('compression');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

app.use(compression());

const listener = app.listen(process.env.PORT || 8888, () => {
  console.log(`server running on ${listener.address().port}`);
});


app.get('/', function(req, res, next){


	//var element = React.createElement('div', null, 'Hello World!');
	//console.log(ReactDOMServer.renderToString(<MyComponent />));
	//res.send(element);
	//
	res.send(`
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
      <h1>hello world</h1>
        <div id="root"></div>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `);

	//res.send(ReactDOMServer.renderToString(<MyComponent />, document.getElementById('body')));
})