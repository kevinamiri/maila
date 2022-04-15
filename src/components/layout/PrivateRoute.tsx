import React, { useContext } from "react";
import { navigate } from "gatsby";
import AppContext from "../../contexts/AppContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { userInfo } = useContext(AppContext);
  const status =
    !userInfo ||
    userInfo == null ||
    userInfo == null ||
    userInfo === "The user is not authenticated";
  return <>{status ? navigate("/app/login") : <Component {...rest} />}</>;
};

export default PrivateRoute;
