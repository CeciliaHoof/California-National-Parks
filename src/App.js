import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css"

function App(){


    return(
        <>
            <header>
                <h1>California's National Parks</h1>
                <NavBar />
            </header>
            <Outlet />
        </>
    );
};

export default App
