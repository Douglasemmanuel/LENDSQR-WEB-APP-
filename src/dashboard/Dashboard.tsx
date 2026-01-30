import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/SideBar'
import '../css/dashboard.css'


import { useState } from 'react'
const Dashboard: React.FC = () => {


  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
// const toggleSidebar = () => {
//   const newState = !isOpen;
//   setIsOpen(newState);
//   console.log('Sidebar open:', newState);
// };

  return (
    <div >
      <Header toggleSidebar={toggleSidebar}/>
      <div className={`AppGlass  scrollable-container ${isOpen ? 'navbar-open' : 'navbar-closed '}`}>

      
    <SideBar isOpen={isOpen} />
    <div className="main-content">
      <Outlet />
    </div>
  </div>
  

    </div>
   
  )
}

export default Dashboard