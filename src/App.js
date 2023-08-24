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
   * I want you to render specific components based on the URL
   * The reason why these components are able to connect to the URL and therefore render the appropriate elements ,is because of the fact that these 
   * are nested inside of the BrowserRouter component, because by doing this we're extending that ability to read from the URL and keep track of 
   * navigation history and all those things and respond in turn with it
   * Because those components , the routes and the root component rely on being wrapped in an outside BrowserRouter component
   * 
   * So our app component is really just the entry opint but all of those components that we leverage are now nested inside of BrowserRouter component
   * That's why we want to wrap our application inside of BorwserRouter so we can leverage the underlying browser functionality when it comes to navigation
   */
}
export default App;
