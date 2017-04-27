/* @flow */
import { describe, it, before, after, afterEach } from 'mocha';
import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import chaiSubset from 'chai-subset';
import shortId from 'shortid';
import casual from 'casual';
import ListMPsService from '../../src/list_mps_service';
import type { MP } from '../../src/objects/mp';
import testMp from '../../test_data/mps/helen_hayes_short.json';

chai.use(chaiAsPromised);
chai.use(chaiSubset);

let mpApi: ListMPsService;


describe('List all MPs endpoint', function () {
    this.timeout(2000);

    let allMPs: MP[];

    before(async () => {
        mpApi = new ListMPsService();
        allMPs = await mpApi.listAllMPs();
    });

    it('gets a list of the correct length', async () => {
        expect(allMPs).to.be.length(649);
    });

    it('gets a list containing a specific MP', async () => {
        expect(allMPs.map(mp => mp.name)).to.contain(testMp.name);
    });

    describe('Filtering by party', function () {
        this.timeout(500);
        let labourMPs: MP[];

        before(async () => {
            labourMPs = await mpApi.listMPs('Labour');
        });

        it('gets a list of Labour MPs of the correct length', async () => {
            expect(labourMPs).to.be.length(233);
        });

        it('gets a list of Labour MPs containing a specific Labour MP', async () => {
            expect(labourMPs.map(mp => mp.name)).to.contain(testMp.name);
        });
    });
});

