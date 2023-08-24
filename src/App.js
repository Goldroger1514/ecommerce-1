import Home from './routes/home/home.component'
import { Routes, Route, Outlet } from 'react-router-dom'
let App = () => {
  let Navigation = () => {
    return (
      <div className='nav-bar' >
        <div className='links'>
          <h1>I am the navigation Bar</h1>
        </div>
        <Outlet />
      </div>
    )
    /**
     * This is our top level component 
     * The outlet now in turn , render everything else inside
     * Inside the <Outlet/> , this is what we'll swap based on the remaining route matching inside and this pattern matching 
     * This deeper route matching you can do continually , however nested deep you go
     */
  }
  let Shop = () => {
    return <h1>Hello i'm the shop</h1>
  }
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index={true} element={<Home />} />
        {
          /**
           * When you match just / with nothing on it , then the Home component should be renderd with it
           * The home component is the base component inside of the <Outlet/>
           */
        }
        <Route path='/shop' element={<Shop />} />
      </Route>
    </Routes>
  )
}
export default App;
