import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/SideBar'
import '../css/dashboard.css'


import { useState } from 'react'
const Dashboard: React.FC = () => {


  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className={`App ${isOpen ? 'with-sidebar' : ''}`}>
      <Header/>
      <div className='AppGlass scrollable-container'>
       <SideBar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
        <div className="main-content">
    <Outlet />
  </div>
      </div>
    </div>
  )
}

export default Dashboard