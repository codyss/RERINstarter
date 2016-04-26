import chai, { expect } from 'chai';
import { afterEach } from 'mocha';
import chaiShallowDeep from 'chai-shallow-deep-equal';
chai.use(chaiShallowDeep);
import { List, Map } from 'immutable';
import * as actions from '../app/actions'
import * as types from '../app/constants'

describe('actions', () => {

  it('should create an action to save the Google Map', () => {
    const map = {map: 'testMapObj'}
    const expectedAction = {
      type: types.SAVE_MAP,
      map
    }
    expect(actions.saveMap(map)).to.shallowDeepEqual(expectedAction);
  })

  it('should create an action add a marker to state', () => {
    const id = 'airportA'
    const marker = {marker: 'testMakerObj'}
    const expectedAction = {
      type: types.ADD_MARKER,
      id,
      marker
    }
    expect(actions.addMarker(id, marker)).to.shallowDeepEqual(expectedAction);
  })

})
