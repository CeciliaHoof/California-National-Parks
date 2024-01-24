import { useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
    <header>
        <h1>California's National Parks</h1>
        <NavBar />
    </header>
    <main>
        <h1>Whoops! Something went wrong!</h1>
    </main>
    </>
  );
};

export default ErrorPage;