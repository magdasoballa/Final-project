import * as firebase from "firebase";
import {CHANGE_STATUS_FETCHING, CHANGE_STATUS_FULFILLED, SEND_MESSAGE} from "../types";

export const sendMessage = (message) =>(dispatch) => {
    const db = firebase.firestore();
    dispatch({ type: CHANGE_STATUS_FETCHING});
    const email = localStorage.getItem("user");
    db.collection('users').doc(email).set({
        messageToSend: message
    }).then(() => {
        dispatch({type: SEND_MESSAGE, payload: message });
    });
    dispatch({ type: CHANGE_STATUS_FULFILLED});
}