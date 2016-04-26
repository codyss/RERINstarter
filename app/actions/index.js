import { fromJS } from 'immutable';
import request from 'axios';
import * as types from '../constants/index';

export function saveMap(map) {
  return {
    type: types.SAVE_MAP,
    map
  }
}

export function addMarker(id, marker) {
  return {
    type: types.ADD_MARKER,
    id,
    marker
  }
}
