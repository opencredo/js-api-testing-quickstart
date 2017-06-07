/* @flow */

import Axios from 'axios';
import getApiKey from './api_key';
import type { MP } from '../objects/mp';

export default class GetMpService {
    axios: Axios;
    apiKey: string;

    constructor() {
        this.apiKey = getApiKey();
        this.axios = Axios.create({
            baseURL: 'https://www.theyworkforyou.com/api'
        });
    }

    getMP(mpId: string): Promise<MP> {
        return this.axios.get(`/getMP?id=${mpId}&key=${this.apiKey}&output=js`);
    }

    async getMPbyConstituency(constituency: string): Promise<MP> {
        const response = await this.axios.get(`/getMP?constituency=${constituency}&key=${this.apiKey}&output=js`);
        return response.data;
    }

    async getMPbyPostcode(postcode: string): Promise<MP> {
        const response = await this.axios.get(`/getMP?postcode=${postcode}&key=${this.apiKey}&output=js`);
        return response.data;
    }

}
