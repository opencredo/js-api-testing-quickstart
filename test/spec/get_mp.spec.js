/* @flow */
import { describe, it, before } from 'mocha';
import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import chaiSubset from 'chai-subset';
import GetMpService from '../src/api/get_single_mp_service';
import type { MP } from '../src/objects/mp';
import testMp from '../data/mps/helen_hayes.json';


chai.use(chaiAsPromised);
chai.use(chaiSubset);

describe('Get single MP endpoint', function run() {
    this.timeout(2000);

    let mpApi: GetMpService;

    before(async () => {
        mpApi = new GetMpService();
    });

    it('gets an MP by person ID', async () => {
        const mp: MP = await mpApi.getMP(testMp.person_id);
        expect(mp).to.eql(testMp);
    });

    it('gets a local MP by postcode', async () => {
        const mp: MP = await mpApi.getMPbyPostcode('SE218HY');
        expect(mp).to.eql(testMp);
    });

    it('gets a local MP by constituency', async () => {
        const mp: MP = await mpApi.getMPbyConstituency(testMp.constituency);
        expect(mp).to.eql(testMp);
    });
});
