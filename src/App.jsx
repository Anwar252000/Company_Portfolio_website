// eslint-disable-next-line no-unused-vars
import React from 'react'
import Mainpage from './Components/Mainpage'
import Webaibrus from './Components/Webaibrus'
import Trusted from './Components/Trusted'
import Improve from './Components/Improve'
// import Technologypg from './Components/Technologypg'
import Ourservice from './Components/Ourservice'
// import Threecards from './Components/Threecards'
import Technologyindex from './Components/Technologyindex'
import Needconsulting from './Components/Needconsulting'


const App = () => {
  return (
    <div> 
    <Mainpage />
    <Webaibrus />
    <Trusted />
    <Improve />
    {/* <Technologypg /> */}
    <Technologyindex/>
    <Ourservice />
    {/* <Threecards /> */}
    <Needconsulting/>
    {/* <Beforefooter/> */}
    </div>
  )
}

export default App
