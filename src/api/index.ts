import axios from 'axios';
import { AxiosInstance } from 'axios';

import * as user from './users';
import * as wiki from './wikis';

export const createFandomAPI = (): any => {
    const api = axios.create({
        baseURL: 'https://dev.fandom.com//api/v1',
        timeout: 1000,
    });
    return {
        wiki: wiki.generateApi(api)
    }
};

export const createSpecificWikiAPI = (name: string): AxiosInstance => {
    return axios.create({
        baseURL: `https://${name}.fandom.com//api/v1`,
        timeout: 1000,
    });
};