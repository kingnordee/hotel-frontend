import './styles/App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Rooms from "./components/Rooms";
import Reservations from "./components/Reservations";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <NavBar/>
            <Route exact path='/' component={Home} />
            <Route exact path='/:hotelId/rooms' component={Rooms} />
            <Route exact path='/reservations' component={Reservations}/>
        </BrowserRouter>


    </div>
  );
}

export default App;
