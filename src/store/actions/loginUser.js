import { CHANGE_STATUS_FETCHING, CHANGE_STATUS_FULFILLED, SET_USER_DATA} from "../types";
import * as firebase from 'firebase';


export const loginUser = (email, password ) => (dispatch) => {
    /*eslint no-undef: 0*/
    return new Promise((resolve, reject) => {
         const db = firebase.firestore();
        dispatch({ type: CHANGE_STATUS_FETCHING});
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            db.collection('users').doc(email).get().then((userData) => {
                dispatch({type: SET_USER_DATA, payload: userData.data()});
                localStorage.setItem("user", userData.data().email);
            });
            resolve();
        })
        .catch((err) => {
            reject(err.message);
        });
        dispatch({ type: CHANGE_STATUS_FULFILLED});
    });
};