import { useEffect, useState } from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {API_URL} from "../Constants";
import "../styles/reservations.css"
import ResCard from "./ResCard";

const Reservations = () => {

    const [state, setState] = useState({
        loaded: false, error: false, reservations: []
    })

    useEffect(() => {
        axios.get(`${API_URL}/findReservations`).then(response => {
            setState({...state, reservations: response.data, loaded: true})
        }).catch(e => {
            console.log(`${e}`);
            setState({...state, error: true})
        })
    }, [])

    if(state.error) return <div><br/> Error loading reservations</div>
    else if(!state.loaded) return <div><i> Loading reservations... </i></div>
    else {//else starts
        return <div className="resWrap">
            <table>
                <thead>
                    <tr>
                        <th>Room <br/> Number</th>
                        <th>Occupant</th>
                        <th>Hotel</th>
                        <th>Rate</th>
                        <th>User <br/> Action</th>
                    </tr>
                </thead>
                <tbody>
                    {state.reservations.map(res => {
                        return <ResCard key={res.roomNum} res={res}/>
                    })}
                    {state.reservations < 1 && <tr><td colSpan="5" style={{color:"red", border:"none"}}>
                            No reservations found!
                    </td></tr>}
                </tbody>
            </table>

            <br/>
            <NavLink to={
                `/${JSON.parse(localStorage.getItem("hotel")).id}/rooms`
            }>return to rooms</NavLink>
        </div>

    }
}

export default Reservations

