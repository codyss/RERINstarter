import { Map, List } from 'immutable';
import {
  ADD_MARKER,
  SAVE_MAP
} from '../constants';

export default function main(state=Map({
  markerA: '',
  markerB: '',
  map: {}
}), action={}) {
  switch (action.type) {
    case ADD_MARKER:
      // TODO redesign to work with any number of markers
    case SAVE_MAP:
      return state.set('map', action.map)
    default:
      return state;
  }
}
