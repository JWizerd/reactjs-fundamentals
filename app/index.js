var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var Raven = require('raven-js')

var sentryKey = "8c2f3f1d80a648108a6375555060588d"
var sentryApp = "102845"
var sentryURL = "http://" + sentryKey + "@sentry.io/" + sentryApp

var _APP_INFO = {
  name: 'Github Battle',
  branch: '4',
  version: '1.0'
}

Raven.config(sentryURL, {
  release: _APP_INFO.version
}).install()

ReactDOM.render(
  routes, document.getElementById('app')
)
