import * as actionTypes from "./actionTypes";

export const setCurrentProps = payload => ({
  type: actionTypes.SET_CURRENT_PROPS,
  payload,
})

export const setWeapType = newWeapType => {
  return {
    type: actionTypes.SET_WEAPON_TYPE,
    newWeapType: newWeapType
  };
};

export const setWeapon = newWeapon => {
  return {
    type: actionTypes.SET_WEAPON,
    newWeapon: newWeapon
  };
};

export const setHelmet = newHelmet => {
  return {
    type: actionTypes.SET_HELMET,
    newHelmet: newHelmet
  };
};

export const setVest = newVest => {
  return {
    type: actionTypes.SET_VEST,
    newVest: newVest
  };
};

export const setView = newView => {
  return {
    type: actionTypes.SET_VIEW,
    newView: newView
  };
};
