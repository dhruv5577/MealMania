import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./Pages/Root"
import AddItem from "./Pages/AddItem/AddItem.jsx"
import Listitem from "./Pages/ListItem/Listitem.jsx"
import Orderlist from "./Pages/Orderlist/Orderlist.jsx"


const router=createBrowserRouter([

  {
    path:'/',
    element:<Root/>,
    children:[
      {path:'/add',element:<AddItem/>},
      {path:'/list',element:<Listitem/>},
      {path:'/order',element:<Orderlist/>},
    ]
  }

])

const App=()=>{
  return <RouterProvider router={router}>
  </RouterProvider>
}

export default App
