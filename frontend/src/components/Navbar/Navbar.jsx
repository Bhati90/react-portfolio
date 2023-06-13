import React, { useState } from 'react'
import './Navbar.scss'
import { images } from '../../constants'
import {HiMenuAlt4,HiX} from 'react-icons/hi';
import { motion} from 'framer-motion';
import { User, useAuth0 } from '@auth0/auth0-react';
const Navbar = () => {
  const [toggle,setToggle] = useState(false);
  const { loginWithRedirect } = useAuth0();
  const { logout ,isAuthenticated } = useAuth0();

  return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
            <img src = {images.logok} className='logok' alt = "logo"/>
        </div>
        <ul className='app__navbar-links '>
            {['home','about','contact','work','skills'].map((item)=>(
             <li className='app__flex p-text' key={`link-${item}`}>
                <div/>
                <a href={`#${item}`}>{item}</a>
             </li>
            ))}
            {/* <li>{isAuthenticated && <p>{User.name}</p> }</li>
           <li>
            {isAuthenticated ?(<button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>  ):(<button onClick={() => loginWithRedirect()}>Log In</button>
          )} */}
           
    {/* </li>  */}
    </ul>

     <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={()=>setToggle(true)}/>

        {toggle && (
            <motion.div
            whileInView={{x:[300,0]}}
            transition={{duration:0.85,ease:'easeOut'}}>
                <HiX onClick={()=>setToggle(false)}/>
                <ul>
                {['home','about','contact','work','skill'].map((item)=>(
             <li  key={item}>
              
                <a href={`#${item}`} onClick={()=>setToggle(false)}>{item}</a>
             </li>
             
            ))}
            </ul>
            </motion.div>
        )}
     </div>

    </nav>
  )
}

export default Navbar
