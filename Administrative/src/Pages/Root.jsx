
import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Leftbar from '../components/Leftbar/Leftbar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Root() {
  return (
    <>
    <ToastContainer/>
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
