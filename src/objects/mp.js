/* @flow */
import type { Office } from './office';

export type MP = {
    member_id?: string;
    person_id?: string;
    name?: string;
    party?: string;
    constituency?: string;
    office?: Office[];
}
