var express = require('express');
var nodalytics = require('nodalytics')
var app = express();
var googleAnalyticsId = process.env.GOOGLE_ANALYTICS_ID;

app.use(nodalytics(googleAnalyticsId));

console.log(`Using Google Analytics ID ${googleAnalyticsId}`);

app.get('/', function (req, res) {
  res.send('Hello world!');
});

app.listen(3000);
