import React, {useState} from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
// import Bars from '../../assets/bars.png'
// import Link from 'react-scroll'
import {Link} from 'react-scroll'
import { FaBars } from 'react-icons/fa'
const Header = () => {
  const mobile = window.innerWidth<=768 ? true: false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div>
       <div className="header">
        <img src={Logo} alt="" srcset="" className='logo'/>
        {( menuOpened===false && mobile===true)? (
          <div style={{backgroundColor:'grey',padding:'0.3rem',borderRadius:'5px'}}
          onClick={()=> setMenuOpened(true)}
          > <FaBars size={30} color='white'></FaBars> </div>
        ): (<ul className='header-menu'>
                <li>
                <Link onClick={()=>setMenuOpened(false)}
                  activeClass='active'
                  to='home'
                  span={true}
                  smooth={true}
                >Home</Link>
                </li>
                <li>
                  <Link onClick={()=>setMenuOpened(false)}
                  to='Programs'
                  span={true}
                  smooth={true}> Programs</Link>
                </li>
                <li >
                  <Link onClick={()=>setMenuOpened(false)}
                  to='reasons'
                  span={true}
                  smooth={true}> Why Us</Link></li>
                <li><Link onClick={()=>setMenuOpened(false)}
                  to='plans'
                  span={true}
                  smooth={true}> Plans</Link></li>
                <li><Link onClick={()=>setMenuOpened(false)}
                  to='testimonials'
                  span={true}
                  smooth={true}> Testimonials</Link></li>
            </ul>
            )}
            
       </div>
    </div>
  )
}

export default Header
