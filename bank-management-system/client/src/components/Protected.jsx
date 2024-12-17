
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Protected = ({children}) => {
    const { currentUser } = useSelector((state) => state.user);
    const isUserLoggedIn = (user) => {
      return Object.keys(user || {}).length > 0;
    };

  return isUserLoggedIn(currentUser) ? children : <Navigate to="/login" />;
};

export default Protected;
