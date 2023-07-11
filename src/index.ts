const repl = require('node:repl');

import * as apis from './api/index';
import * as scripts from './scripts/index';

const api = apis.createFandomAPI();
const createSpecificWikiAPI = apis.createSpecificWikiAPI;

console.log("Fandom Dump CLI");

const server = repl.start();
server.context.api = api;
server.context.createSpecificWikiAPI = createSpecificWikiAPI;
server.context.scripts = scripts;