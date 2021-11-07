import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import { RequireAuth } from './components/navbar/auth/RequireAuth';
import useAuthContext from './hooks/useAuthContext';
import Home from './pages/home';
import Login from './pages/login';
import SignUp from './pages/signup';

function App() {
  const { isAuthenticated } = useAuthContext();

  return (
    <div className="App">
      {isAuthenticated && (
        <>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
