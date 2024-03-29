
var fs = require('fs')

var babelrc = JSON.parse(fs.readFileSync('./.babelrc', 'utf8'))

if(!babelrc.plugins)
  babelrc.plugins = []

// Expose api/server as module 'api' to the server
babelrc.plugins.push(["babel-plugin-module-alias", [
  { "src": "./src/api/server.js", "expose": "api" }
]])

require("babel-core/register")(babelrc)
require("babel-polyfill")

require("./src/server")