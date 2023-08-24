import Home from './routes/home/home.component'
import { Routes, Route } from 'react-router-dom'
let App = () => {
  let Shop = () => {
    return <h1>Hello i'm the shop</h1>
  }
  return (
    <Routes>
      <Route path='/home' element={<Home />} >
        <Route path='/home/shop' element={<Shop />} />
      </Route>
    </Routes>
  )
}
export default App;
