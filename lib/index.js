var repl = require('node:repl');
var apis = require('./api/index.js');
var api = apis.createFandomAPI();
var createSpecificWikiAPI = apis.createSpecificWikiAPI;
console.log("Fandom Dump CLI");
repl.context.api = api;
repl.context.createSpecificWikiAPI = createSpecificWikiAPI;
repl.start();
//# sourceMappingURL=index.js.map