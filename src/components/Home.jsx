import { useEffect, useState } from "react";
import axios from "axios";
import HotelCard from "./HotelCard";
import { API_URL } from "../Constants";

const Home = () => {

    const [state, setState] = useState({
        hotels: [], loaded: false, error: false, errorMsg: ""
    })

    const style = {
        display: "flex", justifyContent: "center", flexWrap: "wrap"
    }

    useEffect(() => {
        axios.get(API_URL).then( response => {
            setState({
                ...state, loaded: true, error: false, hotels: [...response.data]
            });
        }).catch(error => {
            setState({ ...state, error: true, errorMsg: error })
            console.log(error);
        }).then(() => {
            //Always runs
        });
    }, [])

    if(state.error) return <div><br/> Error loading hotels: {state.errorMsg.message}! </div>
    else if(!state.loaded) return <div><i> Loading hotels... </i></div>
    else {//else starts
        return (
            <div style={style}>
                {
                    state.hotels.map(hotel => {
                           return <HotelCard key={hotel.id} hotel={hotel}/>
                    })
                }
                { state.hotels.length < 1 && <div style={{color:"red"}}><br/>Sorry, no hotels are available at the moment!</div>}
            </div>
        )
    }//else ends
}

export default Home;
