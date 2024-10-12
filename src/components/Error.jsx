import { useRouteError } from "react-router-dom";

function Error() {
    const err = useRouteError();

    return(
        <>
        <h1>error 404</h1>
        <h2>wrong path</h2>
        <p>{err.status},{err.statusText}</p>
        <p>{err.data}</p>
        </>
    )
}

export default Error;