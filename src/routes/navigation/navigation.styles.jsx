// If the component is exported as a default export:
// If the component is the default export of the module, you should import it without curly braces.Here's an example:

// javascript
// Copy code
// // In './MyComponent.js'
// const MyComponent = /* ... */;
// export default MyComponent;

// // In another file
// import MyComponent from './MyComponent';
// If the component is exported as a named export:
// If the component is exported as a named export (i.e., not the default export), you should use curly braces to import it by its specific name.Here's an example:

// javascript
// Copy code
// // In './MyComponent.js'
// export const MyComponent = /* ... */;

// // In another file
// import { MyComponent } from './MyComponent';
// So, the use of curly braces depends on how the component is exported from the module.If it's the default export, you don't use curly braces.If it's a named export, you use curly braces and specify the name of the export you want to import.

// .navigation {
// height: 70px;
// display: flex;
// align - items: center;
// justify - content: space - between;
// padding: 0 10px;

//     .nav - links - container {
// display: flex;
// align - items: center;
//   }
// }
import styled from 'styled-components'
import { Link } from 'react-router-dom'
/**
 * In order to use the library it all comes from this styled keyword from styled-components
 * styled keyword allows us to generate components
 * styled.div => gives us back a div that we can apply style to it
 */
export let NavigationContainer = styled.div`
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
`
/**
 * This gives us a uniquely generated class name 
 * This style gets generated on built so that when we are working with our style components 
 * There are no clashes that will happen because style components will ensure that every one of these components taht we write
 * Has a unique class name 
 * This way the styling will be locked in to that class
 * With styled, comes with  all of html based elements
 * If we want style over an existing component we use brackets
 */
export let LogoContainer = styled(Link)`
  color:black;
`
export let NavLinksContainer = styled.div`
    display: flex;
    align-items: center;
`
export let NavLink = styled(Link)`
  color:black;
`