import gsap from 'gsap'
import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className='flex-centerx h-[100vh]'>
      <div>Hello world</div>
    </div>
  )
}

export default App  