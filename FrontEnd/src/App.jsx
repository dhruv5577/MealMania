import Home from './Pages/Home/Home'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Root from './Pages/Root/Root.jsx'
import Cart from './Pages/Cart/Cart.jsx'
import OrderPlace from './Pages/OrderPlace/OrderPlace'
import './index.css'

const router=createBrowserRouter([

  {
    path:'/',
    element:<Root/>,
    children:[
      {path:'/',element:<Home/>},
      {path:'cart',element:<Cart/>},
      {path:'orders',element:<OrderPlace/>}
    ]
  }

])


const App = () => {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
