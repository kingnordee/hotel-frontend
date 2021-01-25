import { useState } from "react"
import axios from "axios";
import {API_URL} from "../Constants";


const ResCard = ({ res }) => {

    const [state, setState] = useState(false)

    const cancel = async (e) => {
        e.preventDefault()
        if(!window.confirm("Are you sure you want to cancel?")) return
        try{
            await axios.get(`${API_URL}/cancelReservation/${res.roomNum}`)
            setState(true)
        }catch(e){ console.log(`${e}`) }
    }

    return (
        <tr key={res.roomNum}>
            <td>{res.roomNum}</td>
            <td>{res.occupantName}</td>
            <td>{res.hotelName}</td>
            <td>${res.rate}</td>
            { !state && <td onClick={cancel} style={{cursor:"pointer", color:"red"}}> Cancel <br/> Reservation </td> }
            { state && <td style={{color: "green"}}> Successfully <br/> cancelled </td> }
        </tr>
    )

}

export default ResCard
