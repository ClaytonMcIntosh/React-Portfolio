import { NavLink } from 'react-router-dom';
import Menuitem from './Menuitem';

const Mainmenu = () => {
  return (
    <div className='main-menu'>
      <NavLink to="/About" className={({ isActive }) => (isActive ? "active-class" : "not-active-class")} > <Menuitem text='About' /> </NavLink>
      <NavLink to="/Portfolio" className={({ isActive }) => (isActive ? "active-class" : "not-active-class")} > <Menuitem text='Portfolio' /></NavLink>
      <NavLink to="/Contact" className={({ isActive }) => (isActive ? "active-class" : "not-active-class")} > <Menuitem text='Contact' /> </NavLink>
      <NavLink to="/Resume" className={({ isActive }) => (isActive ? "active-class" : "not-active-class")} > <Menuitem text='Resume' /> </NavLink>
    </div>
  )
}

export default Mainmenu
