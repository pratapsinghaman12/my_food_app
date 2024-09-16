import { useRouteError } from "react-router-dom";

const Error = () => {
  const errors = useRouteError();
  return (
    <div>
      <h1>OOooooooops !!!!!!</h1>
      <h2>Some Thing went wrong</h2>
      <h3>
        {errors.status} : {errors.statusText}
      </h3>
    </div>
  );
};

export default Error;
