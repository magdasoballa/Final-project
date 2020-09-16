import * as firebase from "firebase";
import {CHANGE_STATUS_FETCHING ,CHANGE_STATUS_FULFILLED} from "../types";


export const logoutUser= (user) =>(dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch({type: CHANGE_STATUS_FETCHING});
        localStorage.setItem('user', null);
        firebase.auth().signOut().then( () => {
            resolve();

        })
            .catch((err) => {
                reject(err.message);
            })
        dispatch({type: CHANGE_STATUS_FULFILLED});
    })
}