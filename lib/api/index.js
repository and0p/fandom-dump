import axios from 'axios';
import * as wiki from './wikis';
export var createFandomAPI = function () {
    var api = axios.create({
        baseURL: 'https://dev.fandom.com//api/v1',
        timeout: 1000,
    });
    return {
        wiki: wiki.generateApi(api)
    };
};
export var createSpecificWikiAPI = function (name) {
    return axios.create({
        baseURL: "https://".concat(name, ".fandom.com//api/v1"),
        timeout: 1000,
    });
};
//# sourceMappingURL=index.js.map