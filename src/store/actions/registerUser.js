import { CHANGE_STATUS_FETCHING, CHANGE_STATUS_FULFILLED, SET_USER_DATA} from "../types";
import * as firebase from 'firebase';


export const registerUser = (email, password, name ) => (dispatch) => {
    // eslint-disable-next-line no-undef
    return new Promise((resolve, reject) => {
        const db = firebase.firestore();
        dispatch({ type: CHANGE_STATUS_FETCHING});
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            db.collection('users').doc(email).set({
                name: name,
                email: email,
            });
            dispatch({type: SET_USER_DATA, payload: { email: email, name: name }});
            localStorage.setItem("user", email);
            resolve();
        })
        .catch((err) => {
            reject(err.message);
        });
        dispatch({ type: CHANGE_STATUS_FULFILLED});
    });
};