import Home from './routes/home/home.component'
import { Routes, Route } from 'react-router-dom'
let App = () => {
  let Shop = () => {
    return <h1>Hello i'm the shop</h1>
  }
  return (
    <Routes>
      {/* <Route path='/home' element={<Home />} />
      <Route path='/shop' element={<Shop />} /> */}
      <Route path='/' element={<Home />} >
        <Route path='/shop' element={<Shop />} />
      </Route>
    </Routes>
  )
  /**
   * This now does a couple of things , the first of which is it makes the path that's nested inside relative to the path of the parent
   * So what that means is that you can imagine that for this root path to match now , it's going to have to match the parent first so {/}
   * and then it's going to have to match the inside , which is shop {/shop}
   * This doesn't seem any different from what we had before because before our path was matching this anyways , but they are no longer siblings, this is now a child and parent
   * So what this means is that if this top level was /hom , in order for the child to match , it's got to be /home/shop
   */
}
export default App;
