

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { API_URL, SHOW_ADD } from "../Constants";

const AddRoomForm = () => {
    const [state, setState] = useState({
        bedType: "", smoking: "", amount: "", added: false,
    })

    const dispatch = useDispatch()

    const handleSubmit =  async (e) => {
        e.preventDefault()

        if(state.bedType === '--Select Bed Type--'||
        state.smoking === '--Select smoking option--' ||
        state.amount < 1) { dispatch({type: SHOW_ADD, payload: false}); return }

        axios.post(`${API_URL}/addRoom/${JSON.parse(localStorage.getItem("hotel")).id}`,{
            bedType: state.bedType, smoking: state.smoking, rate: state.amount
        }).then( response => {
            setState({...state, added: true})
            dispatch({type: SHOW_ADD, payload: false})
        }).catch(error => {
            console.log(`Error from addRoom axios call: ${error}`);
        }).then(() => {
            // if(state.added) return <Redirect to={`/${JSON.parse(localStorage.getItem("hotel")).id}/rooms`}/>
        });
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="bedType">Bed Type</label>
            <select name="" id="bedType"
                    value={state.bedType}
                    onChange={(e) => setState({...state, bedType: e.target.value})}>
                <option value="">--Select Bed Type--</option>
                <option value="King">King</option>
                <option value="Queen">Queen</option>
                <option value="Full">Full</option>
                <option value="Twin">Twin</option>
            </select><br/>
            <label htmlFor="smoking">Smoking?</label>
            <select name="" id="smoking"
                    value={state.smoking}
                    onChange={(e) => setState({...state, smoking: e.target.value})}>
                <option value="">--Select smoking option--</option>
                <option value='N'>N</option>
                <option value='Y'>Y</option>
            </select><br/>

            <label htmlFor="amount">Amount</label>
            <input id="price" type="Number"
                   value={state.amount}
                   onChange={val => setState({...state, amount: val.target.value})}/>

            <input style={{background:"lightblue", borderColor:"lightblue"}} type="submit"/>
            <br/><hr/>
        </form>
    )
}

export default AddRoomForm
