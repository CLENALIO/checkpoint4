import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import UserConnexionContext from "../context/UserConnexionContext";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { userConnected } = useContext(UserConnexionContext);

  useEffect(() => {
    if (!userConnected) {
      navigate("/");
    }
  }, [userConnected]);

  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
