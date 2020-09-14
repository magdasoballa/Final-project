import { CHANGE_STATUS_FETCHING, CHANGE_STATUS_FULFILLED, SET_USER_DATA} from "../types";
import * as firebase from 'firebase';


export const setUserData = (email) => (dispatch) => {
    const db = firebase.firestore();
    dispatch({ type: CHANGE_STATUS_FETCHING});
    db.collection('users').doc(email).get().then((userData) => {
        dispatch({type: SET_USER_DATA, payload: userData.data()});
        console.log(userData.data())
    });
    dispatch({ type: CHANGE_STATUS_FULFILLED});
};