
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import { useAuth } from './hooks/Auth_hooks';
import LoginScreen from './screens/Login';
import Dashboard from './dashboard/Dashboard';
import Home from './dashboard/Home';
import UserDetails from './dashboard/UserDetails';
// import PrivatedRoutes from './routes/PrivatedRoutes';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginScreen />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path='user-details' element={<UserDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
