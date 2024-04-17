import { useRouteError } from "react-router-dom";

const NotFound = () => {
    const error = useRouteError();
    return (
        <div id="error-page" className="min-h-screen bg-slate-200 flex flex-col items-center justify-center  ">
        <div className="shadow-2xl rounded-xl bg-white  p-12">
        <h1 className="text-5xl font-bold text-center mb-4">404</h1>
        <p className="text-2xl font-semibold text-center">Sorry, an unexpected error has occurred.</p>
        <p className="text-4xl text-center font-bold mt-2">
          <i>{error.statusText || error.message}</i>
        </p>
        </div>
      </div>
    );
};

export default NotFound;