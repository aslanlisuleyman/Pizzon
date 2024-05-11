import React from 'react'
import HomeStatic1 from '../../../components/Site/HomeStatic1/HomeStatic1'
import HomeStatic2 from '../../../components/Site/HomeStatic2/HomeStatic2'
import HomeCard1 from '../../../components/Site/HomeCard1/HomeCard1'
import HomeStatic3 from '../../../components/Site/HomeStatic3/HomeStatic3'
import HomeStatic4 from '../../../components/Site/HomeStatic4/HomeStatic4'
import "./Home.scss"

const Home = () => {
  return (
    <div className='conta'> 

      <div className='bo'>
<HomeStatic1 />

      </div>

      <div className='bo'> <HomeCard1/></div>
     <div className='bo'> <HomeStatic2/></div>
     <div className='bo'><HomeStatic3/></div>
      <div className='bo'> <HomeStatic4/></div>
     
    </div>
  )
}

export default Home