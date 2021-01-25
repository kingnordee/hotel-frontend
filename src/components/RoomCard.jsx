import React, { useState } from "react";
import axios from "axios";
import {API_URL} from "../Constants";

const RoomCard = ({ room } ) => {
    const [state, setState] = useState({
        book: false, loaded: false, error: false, name: ""
    })

    const handleBook = (e) => {
        e.preventDefault()

        setState({...state, book: true})

        const name = prompt("Please enter your first and last name: ")

        if((name == null || name.trim() === "") || !window.confirm(`Continue as: ${name}?`)){
            setState({...state, book: false})
            return
        }

        axios.get(`${API_URL}/addReservation/${room.roomNum}/${name}`).then(response => {
            setState({...state, loaded: true, book: true, name })
        }).catch(error => {
            setState({...state, error: true})
            console.log(error);
        })
    }

    return(
        <div style={{padding: "10px", display:"flex",
        flexDirection:"column", alignItems:"center"}}>
            <div style={{width:"50%", boxShadow: "0 0 10px #E6E6FA", padding:"20px"}}>
                <p style={{margin:"5px"}}> Room number: {room.roomNum} </p>
                <p style={{margin:"5px"}}> Bed Type: {room.bedType} </p>
                <p style={{margin:"5px"}}> Smoking: {room.smoking.toUpperCase()} </p>
                <p style={{margin:"5px"}}> Rate: ${room.roomRate} </p>
                { !state.book && <button
                    onClick={handleBook}
                    style={{ background: "royalblue", color: "white", padding: "6px 20px",
                        boxShadow: "0 0 10px lightblue", border: "none", borderRadius: "2px"}}
                >Book</button> }
                {(state.book && !state.loaded) &&
                <button
                    style={{ background: "royalblue", color: "white", padding: "6px 20px",
                        boxShadow: "0 0 10px lightblue", border: "none", borderRadius: "2px"}}
                ><i>Processing...</i></button>
                }
                {state.loaded && <i style={{color: "green"}}> Thank you, {state.name}. You have successfully booked this room!</i>}
                {state.error && <p style={{color:"red"}}>Sorry, the request could not pe processed at this time!</p>}
            </div>


        </div>
    )
}

export default RoomCard;
