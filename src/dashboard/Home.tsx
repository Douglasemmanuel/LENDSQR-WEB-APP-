import React from 'react'
import MainButtons from '../components/MainButtons'
import DataTable from '../components/DataTable'
import '../css/Home.css'

const Home: React.FC = () => {
  return (
    <div 
    className='home-container '
     style={{
        maxHeight: '100vh',
        scrollBehavior: 'smooth',
        }}
    >
        <MainButtons/>
        <div style={{marginTop:'2rem' , marginBottom:'2rem'}}></div>
        <DataTable/>
    </div>
  )
}

export default Home