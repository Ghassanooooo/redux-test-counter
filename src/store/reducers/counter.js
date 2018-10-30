import * as actionTypes from "../actions/actionsTypes";

const initState = {
  counter: 0,
  comment: []
};

const reducer = (state = initState, actions) => {
  switch (actions.type) {
    case actionTypes.ADD_ONE:
      return {
        ...state,
        counter: state.counter + 1
      };
    case actionTypes.SUB_ONE:
      return {
        ...state,
        counter: state.counter - 1
      };
    case actionTypes.COMMENT:
      return {
        ...state,
        comment: state.comment.concat(actions.payload)
      };
    case actionTypes.DELETE_COMMENT:
      return {
        ...state,
        comment: state.comment.filter(
          i => state.comment.indexOf(i) !== actions.payload
        )
      };
    default:
      return state;
  }
};

export default reducer;
