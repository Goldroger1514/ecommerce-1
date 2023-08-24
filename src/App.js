import Home from './routes/home/home.component'
import { Routes, Route } from 'react-router-dom'
let App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )
  /**
   * We want to wrap anything that is going to be routable inside of this Routes component
   * Essentially what Routes does is that it allows this application to register those route level components
   * that will then in turn render a specific compnent when it matchees this specific rout that you're looking for
   * ## 
   * <Route path='/'/> , meaning because this is at the base URL level, when we just land on the URL, then i'm going to match
   * So moment this matches , i want you to now render this element
   */
}
export default App;
