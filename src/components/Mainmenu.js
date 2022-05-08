import { NavLink } from 'react-router-dom';
import Menuitem from './Menuitem';

const Mainmenu = () => {
  return (
    <div className='main-menu'>
      <NavLink to="/about" className={({ isActive }) => (isActive ? "active-class" : "not-active-class")} > <Menuitem text='About' /> </NavLink>
      <NavLink to="/portfolio" className={({ isActive }) => (isActive ? "active-class" : "not-active-class")} > <Menuitem text='Portfolio' /></NavLink>
      <NavLink to="/contact" className={({ isActive }) => (isActive ? "active-class" : "not-active-class")} > <Menuitem text='Contact' /> </NavLink>
      <NavLink to="/resume" className={({ isActive }) => (isActive ? "active-class" : "not-active-class")} > <Menuitem text='Resume' /> </NavLink>
    </div>
  )
}

export default Mainmenu
