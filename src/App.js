import Home from './routes/home/home.component'
import { Routes, Route, Outlet } from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component'
let App = () => {
  let Shop = () => {
    return <h1>Hello i'm the shop</h1>
  }
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path='/shop' element={<Shop />} />
      </Route>
    </Routes>
  )
}
export default App;
