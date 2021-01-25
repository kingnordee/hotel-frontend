import "../styles/hotelCard.css"
import {NavLink} from "react-router-dom";

const HotelCard = ({ hotel }) => {
    const style = {
        margin: "20px", width: "40vw", borderRadius: "5px"
    }

    const handleClick = (e) => {
        e.preventDefault()
        // dispatch({ type: SET_HOTEL, payload: hotel })
        localStorage.setItem("hotel", JSON.stringify(hotel))
    }

    return <div style={style} className={"hotelCard"} onClick={handleClick}>
            <NavLink to={`/${hotel.id}/rooms`} >
                <div>
                    <h1>{ hotel.name }</h1>
                    <h4>{ hotel.location }</h4>
                </div>
            </NavLink>
    </div>
}

export default HotelCard;
