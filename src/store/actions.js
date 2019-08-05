import * as actionTypes from "./actionTypes";

export const changeWeapType = newWeapType => {
  return {
    type: actionTypes.CHANGE_WEAPON_TYPE,
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
