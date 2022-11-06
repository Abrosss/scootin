import { Link } from "react-router-dom";
import Button from '../Button/Button'
import {ReactComponent as YourSvg} from '../menu.svg'
import {ReactComponent as Cross} from '../../assets/images/cross.svg'
import Logo from '../../assets/images/logo.svg';
import './Header.css';
import { useState } from "react";
import { useRef } from "react";
function Header() {
  const [activeMenu, setActiveMenu] = useState(false)
  console.log(activeMenu)
 const navRef = useRef()
 console.log(navRef.current.clientHeight)
 console.log(window.innerHeight)
 function proportion() {
  return Math.floor(navRef.current.clientHeight * 100 / window.innerHeight) 
 }
 console.log(proportion())
    return (
      <div ref={navRef} className="header">
       {activeMenu ? <Cross onClick={() => setActiveMenu(!activeMenu)} className="burger"/>  : <YourSvg onClick={() => setActiveMenu(!activeMenu)} className="burger"/>
        }
        <nav>
        <Link to="/"><img src={Logo}></img></Link>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/location">Location</Link>
        <Link className="nav-link" to="/careers">Careers</Link>
        </nav>
        <Button text='Get Scootin'/>
        <section style={{top: proportion() + "%"}} className={activeMenu ? "burgerMenu show" : "burgerMenu"}>
          <section className="burgerContent">
          <nav>
        <a className="nav-link" href="/about">About</a>
        <a className="nav-link" href="/location">Location</a>
        <a className="nav-link" href="/careers">Careers</a>
        </nav>
        <Button text='Get Scootin'/>
          </section>
        </section>
      </div>
    );
  }
  
  export default Header;
  