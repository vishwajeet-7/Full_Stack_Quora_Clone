import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../components/Home/Dashboard'
import Login from '../components/Login/Login'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='' element={""}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
