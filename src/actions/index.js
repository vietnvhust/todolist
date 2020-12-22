import * as types from './../constants/ActionTypes';

export const listAll = () => {
  return {
    type: types.LIST_ALL,
  };
};

export const toogleForm = () => {
  return {
    type: types.TOGGLE_FORM,
  };
};