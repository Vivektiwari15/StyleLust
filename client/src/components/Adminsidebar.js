import React, { useState } from 'react'
import '../styles/adminsidebar.css'
import { Link } from 'react-router-dom'
import Logo from '../images/Logo/Logo.png'
import Dashboard from './admin/Dashboard'
import AddCarousel from './admin/AddCarousel'
import DeleteCarousel from './admin/DeleteCarousel'
import AddOutfit from './admin/AddOutfit'
import UpdateOutfit from './admin/UpdateOutfit'
import DeleteOutfit from './admin/DeleteOutfit'
import ViewOutfit from './admin/ViewOutfit'
import ViewFeedback from './admin/ViewFeedback'
import DeleteFeedbaack from './admin/DeleteFeedbaack'
import ViewUser from './admin/ViewUser'
import DeleteUser from './admin/DeleteUser'
import AdminSignup from './admin/AdminSignup'


export default function Adminsidebar() {

  const [counter, setCounter] = useState(0);

  let componentToRender;

  switch (counter) {
    case 0:
      componentToRender = <Dashboard />;
      break;
    case 1:
      componentToRender = <AddCarousel />;
      break;
    case 2:
      componentToRender = <DeleteCarousel />;
      break;
    case 3:
      componentToRender = <AddOutfit />;
      break;
    case 4:
      componentToRender = <UpdateOutfit />;
      break;
    case 5:
      componentToRender = <DeleteOutfit />;
      break;
    case 6:
      componentToRender = <ViewOutfit />;
      break;
    case 7:
      componentToRender = <ViewFeedback />;
      break;
    case 8:
      componentToRender = <DeleteFeedbaack />;
      break;
    case 9:
      componentToRender = <ViewUser />;
      break;
    case 10:
      componentToRender = <DeleteUser />;
      break;
    case 11:
      componentToRender = <AdminSignup />;
      break;
  }

  return (
    <>
     <header className="bg-black text-white flex items-center justify-between px-8 py-4">
    <img
      className="Logo"
      src={Logo}
      width="120px"
      alt="Logo"
      srcSet=""
    />
    <div className="btns">
      <button id="btn-logout">Logout</button>
    </div>
  </header>
  <aside>
    <div className="menux">
      <br />
      <Link className="dashboard" onClick={()=>setCounter(0)}>
        Dashboard
      </Link>
      <hr id="space" />
      <details>
        <summary>Carousel</summary>
        <ul>
          <li>
            <Link onClick={()=>setCounter(1)}>Add photo</Link>
          </li>
          <li>
            <Link onClick={()=>setCounter(2)}>Delete photo</Link>
          </li>
        </ul>
      </details>
      <details>
        <summary>Outfit</summary>
        <ul>
          <li>
            <Link onClick={()=>setCounter(3)}>Add</Link>
          </li>
          <li>
            <Link onClick={()=>setCounter(4)}>Update</Link>
          </li>
          <li>
            <Link onClick={()=>setCounter(5)}>Delete</Link>
          </li>
          <li>
            <Link onClick={()=>setCounter(6)}>View</Link>
          </li>
        </ul>
      </details>
      <details>
        <summary>Feedback</summary>
        <ul>
          <li>
            <Link onClick={()=>setCounter(7)}>View</Link>
          </li>
          <li>
            <Link onClick={()=>setCounter(8)}>Delete</Link>
          </li>
        </ul>
      </details>
      <details>
        <summary>User</summary>
        <ul>
          <li>
            <Link onClick={()=>setCounter(9)}>View</Link>
          </li>
          <li>
            <Link onClick={()=>setCounter(10)}>Delete</Link>
          </li>
        </ul>
      </details>
      {/* ------------------------------------- */}
      <details>
        <summary>Admin</summary>
        <ul>
          <li>
            <Link onClick={()=>setCounter(11)}>Add Admin</Link>
          </li>
        </ul>
      </details>
    </div>
    <div className="side">
    {componentToRender}
    </div>
  </aside>
  <br/>
  <br/>
    </>
  )
}
