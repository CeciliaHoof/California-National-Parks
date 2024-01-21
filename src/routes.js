import App from "./App";
import Home from "./pages/Home";
import Parks from "./pages/Parks";
import Contact from "./pages/Contact";
import ParkDetails from "./pages/ParkDetails"
import ErrorPage from "./pages/ErrorPage";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            }, 
            {
                path: "/parks",
                element: <Parks />,
                children: [
                    {
                        path: "/parks/:id",
                        element: <ParkDetails />
                    }
                ]
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ]
    }
];

export default routes;