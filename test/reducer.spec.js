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

})
