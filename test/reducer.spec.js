import { expect } from 'chai';
import { Map, List } from 'immutable'
import reducer from '../app/reducers/main';
import * as types from '../app/constants';

describe ('Main reducer logic', () => {

  const initialState = Map({

  })

  it('returns initial State with no action', () => {

    const nextState = reducer(initialState)
    expect(nextState).to.equal(initialState)

  })

  describe('Saves the map for access by markers and line', () => {
    it('saves the created Map to the state', () => {

      const action = {
        type: types.SAVE_MAP,
        map: {map: 'testMap'}
      }

      const nextState = reducer(initialState, action)

      expect(nextState.get('map').map).to.equal('testMap')
    })
  })

})
