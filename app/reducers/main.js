import { Map, List } from 'immutable';
import {
  NEW_CONSTANT
} from '../constants';

export default function main(state=Map({
}), action={}) {
  switch (action.type) {
    case NEW_CONSTANT:
      return state
    default:
      return state;
  }
}
