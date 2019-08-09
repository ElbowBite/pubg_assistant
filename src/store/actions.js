import * as actionTypes from "./actionTypes";

export const setCurrentProps = payload => ({
  type: actionTypes.SET_CURRENT_PROPS,
  payload
});

export const setView = newView => {
  return {
    type: actionTypes.SET_VIEW,
    newView: newView
  };
};

export const setBackdropState = () => {
  return {
    type: actionTypes.SET_BACKDROP_STATE
  };
};

export const setRightToolsState = () => {
  return {
    type: actionTypes.SET_RIGHT_TOOLS_STATE
  };
};
