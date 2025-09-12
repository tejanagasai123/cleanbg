import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Testimonils from '../components/Testimonils'
import Last from '../components/Last'

const Home = () => {
  return (
    <div className='mt-5 mx-8 md:mx-10  p-2 md:p-5'>
      <Header></Header>
      <Steps></Steps>
      <Testimonils></Testimonils>
      <Last></Last>
    </div>
  )
}

export default Home