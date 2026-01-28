import React from 'react'
import MainButtons from '../components/MainButtons'
import DataTable from '../components/DataTable'
const Home: React.FC = () => {
  return (
    <div style={{backgroundColor: '#FBFBFB' , padding:'3rem'}}>
        <MainButtons/>
        <div style={{marginTop:'2rem' , marginBottom:'2rem'}}></div>
        <DataTable/>
    </div>
  )
}

export default Home