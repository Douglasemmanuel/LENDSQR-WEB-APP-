
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from "./dashboard/Dashboard" ;
import UserDetails from "./dashboard/UserDetails";
import Home from "./dashboard/Home";
import LoginScreen from './screens/Login';


function App() {
 

  return (
    <>
    <LoginScreen/>
      <Router>
      <Routes>
        <Route path='/' element={<LoginScreen />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path='user-details' element={<UserDetails />} />
        </Route>
      </Routes>
    </Router>
   
   
    </>
  )
}

export default App
