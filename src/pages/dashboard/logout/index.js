import React from "react";
import {logoutUser} from "../../../store/actions";
import {Redirect, useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";

export const Logout = () => {

    const history = useHistory();
    const dispatch = useDispatch();
   return (
       <div>
           <button style={{marginLeft: '30px' , padding:'10px'}}
               onClick={() => {
                   dispatch(logoutUser()).then(() => {
                   history.push("/login");
               })
           }}>Confirm </button>
       </div>
   )
}