import chai, { expect } from 'chai';
import { afterEach } from 'mocha';
import chaiShallowDeep from 'chai-shallow-deep-equal';
chai.use(chaiShallowDeep);
import { List, Map } from 'immutable';
import * as actions from '../app/actions'
import * as types from '../app/constants'

describe('actions', () => {

  it('should create an action', () => {
    const expectedAction = {
      type: types.NEW_CONSTANT
    }
    expect(actions.someFunction()).to.shallowDeepEqual(expectedAction);

  })

})
