import { Link } from 'react-router-dom';
import Menuitem from './Menuitem';

const Mainmenu = () => {
  return (
    <div className='main-menu'>
      <Link to="/About"> <Menuitem text='About' /> </Link>
      <Link to="/Portfolio"> <Menuitem text='Portfolio' /></Link>
      <Link to="/Contact"> <Menuitem text='Contact' /> </Link>
      <Link to="/Resume"> <Menuitem text='Resume' /> </Link>
    </div>
  )
}

export default Mainmenu
