import { createAction } from 'redux-act';
import {db} from "../../Firebase"
import { doc, setDoc } from "firebase/firestore";
// import Client from 'shopify-buy';
// import {defaultColors} from "../../Settings"

export const GENERAL_DATA = createAction('GENERAL_DATA');
export const INFO_DATA = createAction('INFO_DATA');
export const PRIZE_DATA = createAction('PRIZE_DATA');
export const SITE_DATA = createAction('SITE_DATA');
export const GENERAL_INIT = createAction('GENERAL_INIT');
export const GENERAL_ERROR = createAction('GENERAL_ERROR');
export const TOTAL_DATA = createAction('TOTAL_DATA');
export const PACKETS_DATA = createAction('PACKETS_DATA');
export const FAQ_DATA = createAction('FAQ_DATA');
export const ONLINE_DATA = createAction('ONLINE_DATA');
export const SET_COIN = createAction('SET_COIN');
export const GIFTS_DATA = createAction('GIFTS_DATA');

export const defaultColorsSet = () => {
  let root = document.documentElement;

  setDoc(doc(db, "cities", "LA"), {
    name: "Los Angeles",
    state: "CA",
    country: "USA"
  });
  // root.style.setProperty('--primary-color', defaultColors.primary);
  // root.style.setProperty('--primary-color-dark', defaultColors.primaryH);
  // root.style.setProperty('--success-color', defaultColors.success);
  // root.style.setProperty('--success-color-dark', defaultColors.successH);
}