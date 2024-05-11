import React from 'react'

import { Outlet } from 'react-router'
import Footer from '../../layout/Admin/Footer/Footer'
import Header from '../../layout/Admin/Header/Header'


const AdminRoot = () => {
  return (
    <React.Fragment>
        <Header/>
        <Outlet/>
        
    </React.Fragment>
  )
}

export default AdminRoot