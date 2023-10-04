import Home from './routes/home/home.component'
import { Routes, Route, Outlet } from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component'
import Authentication from './routes/authentication/authentication.component'
import Shop from './routes/shop/shop.component'
import Checkout from './routes/checkout/checkout.component'
import { setCurrentUser } from './store/user/user.action'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
let App = () => {
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(setCurrentUser(null))
  }, [])
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path='/shop/*' element={<Shop />} />
        <Route path='/authentication' element={<Authentication />} />
        <Route path='/Checkout' element={<Checkout />} />
      </Route>
    </Routes>
    //Hello World
  )
}
export default App;
//Starting reducers
