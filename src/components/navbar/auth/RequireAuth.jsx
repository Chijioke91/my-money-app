import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import useAuthContext from '../../../hooks/useAuthContext';

export function RequireAuth({ children }) {
  let { user } = useAuthContext();
  let location = useLocation();
  let navigate = useNavigate();

  if (!user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}
