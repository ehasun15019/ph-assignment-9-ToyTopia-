import React from 'react'
import Caurosel from '../../Components/Caurosel/Caurosel'
import FindToys from '../../Components/FindToys/FindToys'
import HomeCard from '../../Components/HomeCard/HomeCard'
import HomeBanner from '../../Components/HomeBanner/HomeBanner'

const Home = () => {
  return (
    <div>
      <Caurosel></Caurosel>
      <FindToys></FindToys>
      <HomeCard></HomeCard>
      <HomeBanner></HomeBanner>
    </div>
  )
}

export default Home
