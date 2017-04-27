/* @flow */

import Axios from 'axios';
import getApiKey from './api_key';
import type { MP } from '../objects/mp';


export default class ListMpService {
    axios: Axios;
    apiKey: string;

    constructor() {
        this.apiKey = getApiKey();
        this.axios = Axios.create({
            baseURL: 'https://www.theyworkforyou.com/api'
        });
    }

    async listMPs(party: string, date?: string = '', search?: string = ''): Promise<MP[]> {
        const response = await this.axios.get(`/getMPs?date=${date}&party=${party}&search=${search}&key=${this.apiKey}`);
        return response.data;
    }

    async listAllMPs(): Promise<MP[]> {
        const response = await this.axios.get(`/getMPs?key=${this.apiKey}`);
        return response.data;
    }

}
