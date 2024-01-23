import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Header } from "semantic-ui-react";
import "./App.css"

function App(){


    return(
        <>
            <header>
                <NavBar />
            </header>
            <Outlet />
        </>
    );
};

export default App
