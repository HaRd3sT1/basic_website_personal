import { createAction } from 'redux-act';
// import firebase from '../../firebase.js';
// import {firebaseError} from "../../Utils"

export const FORM_DATA = createAction('FORM_DATA');
export const FORM_FAIL = createAction('FORM_FAIL');
export const FORM_END = createAction('FORM_END');
export const FORM_START = createAction('FORM_START');

export const onChange = (name, value) => {
    return async (dispatch, getState) => {
        const form = getState().form;
        if(form[name] !== value){
            return dispatch(FORM_DATA({[name]:value}));
        }
    };
};