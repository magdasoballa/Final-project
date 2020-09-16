import {
    CHANGE_STATUS_FETCHING,
    CHANGE_STATUS_FULFILLED,
    SET_USER_KCAL,
    SET_ALL_USER_KCAL,
    SHOW_ALL_USER_KCAL,
    SET_USER_DATA,
    SHOW_USER_KCAL
} from "../types";
import * as firebase from 'firebase';


export const saveUserKcal = (calcData) => (dispatch) => {
    const db = firebase.firestore();
    dispatch({ type: CHANGE_STATUS_FETCHING});
    const email = localStorage.getItem("user");
    db.collection('users').doc(email).update({
        calculatorData: calcData
    }).then(() => {
       dispatch({type: SET_USER_KCAL, payload: calcData });
    });
    dispatch({ type: CHANGE_STATUS_FULFILLED});
};

export const showUserKcal = (state) =>(dispatch) => {
    const db = firebase.firestore();
    dispatch({ type: CHANGE_STATUS_FETCHING});
    const email = localStorage.getItem("user");
    db.collection('users').doc(email).get().then((user) => {
        dispatch({type: SHOW_USER_KCAL, payload: state});

    });
    dispatch({ type: CHANGE_STATUS_FULFILLED});
}

export const saveAllData = (state) =>(dispatch) => {
    const db = firebase.firestore();
    dispatch({ type: CHANGE_STATUS_FETCHING});
    const email = localStorage.getItem("user");
    db.collection('users').doc(email).update({
        allData: state
    }).then(() => {
        dispatch({type: SET_ALL_USER_KCAL, payload: state });
    });
    dispatch({ type: CHANGE_STATUS_FULFILLED});
}

export const showAllData = (state) =>(dispatch) => {
    const db = firebase.firestore();
    dispatch({ type: CHANGE_STATUS_FETCHING});
    const email = localStorage.getItem("user");
    db.collection('users').doc(email).get().then((user) => {
        dispatch({type: SHOW_ALL_USER_KCAL, payload: user.requireAllKcal});

    });
    dispatch({ type: CHANGE_STATUS_FULFILLED});
}