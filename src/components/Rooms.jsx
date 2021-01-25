import { useEffect, useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import { NavLink } from "react-router-dom";
import axios from "axios"
import RoomCard from "./RoomCard";
import AddRoomForm from "./AddRoomForm";
import { API_URL, SHOW_ADD } from "../Constants";

const Rooms = ( props ) => {
    const [state, setState] = useState({
        rooms: [], loaded: false, error: false,
        hotelId: props.match.params.hotelId, hotelName: null,
        add: false
    })

    const select = useSelector(cur => cur.hotelReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(`${API_URL}/findRooms/${state.hotelId}`)
            .then( response => {
            setState({
                ...state, loaded: true, error: false, rooms: [...response.data],
                hotelName: JSON.parse(localStorage.getItem("hotel")).name,
            });
            // dispatch({type: SHOW_ADD, payload: false})
        }).catch(error => {
            setState({ ...state, error: true })
            console.log(error);
        }).then(() => {
            //Always runs
        });
    }, [select.showAdd])

    const buttons = {
        border: "none", padding: "10px", borderRadius: "5px",
        background: "none", color: "royalblue",  margin: "5px",
        borderBottom: "solid royalblue 2px", fontWeight: "bolder"
    }

    if(state.error) return <div>Error loading rooms!</div>
    else if(!state.loaded) return <div>Loading rooms...</div>
    else {
        return (
            <div style={{padding:"0 10vw"}}>
                <br/>
                <div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <button style={buttons} onClick={()=>dispatch({type: SHOW_ADD, payload: true})}>Add Room</button>
                        <h1 style={{margin: 0}}>{state.hotelName}</h1>
                        <NavLink to="/reservations">
                            <button style={buttons}>Reservations</button>
                        </NavLink>
                    </div>
                    { select.showAdd && <AddRoomForm/> }
                </div>
                {
                    state.rooms.length > 0 ?
                        state.rooms.map(room => {
                            return <RoomCard key={room.roomNum} room={room}/>
                        })
                        :
                        <div style={{color:"red"}}><br/> Sorry, there are no rooms available at this moment! </div>
                }
            </div>
        )
    }
}

export default Rooms
