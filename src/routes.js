import App from "./App";
import Home from "./pages/Home";
import Parks from "./pages/Parks";
import Contact from "./pages/Contact";
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