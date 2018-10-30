import * as actionTypes from "./actionsTypes";

export const addHandler = () => ({
  type: actionTypes.ADD_ONE
});

export const subHandler = () => ({
  type: actionTypes.SUB_ONE
});

export const onComment = comment => ({
  type: actionTypes.COMMENT,
  payload: comment
});

export const deleteComment = index => ({
  type: actionTypes.DELETE_COMMENT,
  payload: index
});
