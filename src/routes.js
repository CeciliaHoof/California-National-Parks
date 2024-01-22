import App from "./App";
import Home from "./pages/Home";
import Parks from "./pages/Parks";
import Contact from "./pages/Contact";
import ParkDetails from "./pages/ParkDetails";
import TripPlanner from "./pages/TripPlanner";
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
            },
            {
                path: "/trip-planner",
                element: <TripPlanner />
            }
        ]
    }
];

export default routes;