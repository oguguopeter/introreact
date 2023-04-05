import React from 'react'
import Carousel from './components/carousel/Carousel'
import Forms from './components/forms/Forms'
import Nav from './components/navbar/Nav'
import Testimonial from './components/testimonial/Testimonial'

const App = () => {
  return (
    <>
      <Nav />
      <Carousel />
      <Forms/>
      <Testimonial/>
      </>
  )
}

export default App