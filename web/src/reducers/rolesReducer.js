import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function rolesReducer(state=initialState.roles, action){
  switch(action.type) {
    case types.EMPLOYEE_ROLES_SUCCESS:
      return Object.assign([], action.roles);

    default:
      return state;
  }
}