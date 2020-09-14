import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import EmailIcon from '@material-ui/icons/Email';
import './styles.scss'
import { sendMessage} from "../../../store/actions";
import {useDispatch} from "react-redux";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0 auto',
        backgroundColor: 'white',
        width: '55vw',
        borderRadius: '10px',

},
    textField: {
        border: 'none',
        borderRadius: '10px',
        textAlign: 'center',
        fontFamily: 'Helvetica',
        fontSize: '1rem',
        marginTop: '20px'
    },
    emailField: {
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        width: '70%'
    }
}))

export const Contact = () => {
    const [message,setMessage] = useState('')
    const classes = useStyles();

    const dispatch = useDispatch();
    
    const sendData = () => {
        dispatch(sendMessage(message));
        setMessage('')
        alert('message sent succesfully!')
    };

    return (
        <div className={classes.root} >
                <TextField
                    id="margin-none"
                    placeholder="Your email"
                    className={classes.emailField}
                    fullWidth

                />
                <TextField
                    id="margin-none"
                    className={classes.textField}
                    placeholder="Name"

                />
                <TextField
                    id="margin-none"
                    className={classes.textField}
                    placeholder="Subject"
                />

                <TextareaAutosize
                    rowsMin={8}
                    aria-label="minimum height"
                    placeholder="Your message"
                    value={message}
                    onChange={(e)=>{setMessage(e.target.value)}}
                    className={classes.textField}
                />
              <button onClick={sendData}> <EmailIcon style={{textAlign: 'center'}}/></button>
                </div>
    );
}



