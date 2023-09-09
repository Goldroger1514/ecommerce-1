import Home from './routes/home/home.component'
import { Routes, Route, Outlet } from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component'
import Authentication from './routes/authentication/authentication.component'
import Shop from './routes/shop/shop.component'
import Checkout from './routes/checkout/checkout.component'
let App = () => {
  return (
    <Routes>
      <h1>Hello World</h1>
      <Route path='/' element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/authentication' element={<Authentication />} />
        <Route path='/Checkout' element={<Checkout />} />
      </Route>
    </Routes>
  )
}
export default App;
