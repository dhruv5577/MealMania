
import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Leftbar from '../components/Leftbar/Leftbar'

export default function Root() {
  return (
    <>
     <Navbar/>
      <hr />
      <div className="leftbar">
         <Leftbar/>
         <main>
          <Outlet/>
         </main>
      </div>
    </>
  )
}
