import { fromJS } from 'immutable';
import request from 'axios';
import * as types from '../constants/index';

export function someFunc() {
  return {
    type: types.SOME_CONSTANT
  }
}
