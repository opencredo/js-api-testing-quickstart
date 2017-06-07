/* @flow */

import Axios from 'axios';
import getApiKey from './api_key';
import type { MP } from '../objects/mp';

export type MpQuery = {
    date: string;
    party: string;
    search: string;
}

export default class ListMpService {
    axios: Axios;
    apiKey: string;

    constructor() {
        this.apiKey = getApiKey();
        this.axios = Axios.create({
            baseURL: 'https://www.theyworkforyou.com/api'
        });
    }

    async listMPs(query: MpQuery): Promise<MP[]> {
        const response = await this.axios.get(`/getMPs?date=${query.date}&party=${query.party}&search=${query.search}&key=${this.apiKey}`);
        return response.data;
    }

    async listAllMPs(): Promise<MP[]> {
        const response = await this.axios.get(`/getMPs?key=${this.apiKey}`);
        return response.data;
    }

}
