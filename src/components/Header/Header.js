import { Link } from "react-router-dom";
import Button from '../Button/Button'
import {ReactComponent as YourSvg} from '../menu.svg'
import {ReactComponent as Cross} from '../../assets/images/cross.svg'
import Logo from '../../assets/images/logo.svg';
import './Header.css';
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import AuthContext from '../../context/AuthProvider'
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
function Header() {
  const {auth, setAuth} = useContext(AuthContext)
  const navigate = useNavigate()
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  };
  
  const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
    window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return windowDimensions;
  };
  const { height } = useWindowDimensions();
  const [activeMenu, setActiveMenu] = useState(false)
  const [elemHeight, setElemHeight] = useState(0)
  const navRef = useRef(null)

  useEffect(() => {
    setElemHeight(navRef.current.clientHeight)
  }, [])
function handleLogout(e) {
  e.preventDefault()
 
  setAuth(null)
    localStorage.clear()
    navigate('/')
  
}
 function proportion() {
  return Math.floor(elemHeight * 100 / height) 
 }
 function openMenu() {
  setActiveMenu(!activeMenu)
  document.body.style.position='fixed'
 }
 function closeMenu() {
  setActiveMenu(!activeMenu)
  document.body.style.position='unset'
 }

    return (
      <div ref={navRef} className="header">
       {activeMenu ? <Cross onClick={closeMenu} className="burger"/>  : <YourSvg onClick={openMenu} className="burger"/>
        }
        <nav>
       {auth ? <Link to="/dashboard"><img alt="logo" src={Logo}></img></Link> : <Link to="/"><img alt="logo" src={Logo}></img></Link>} 
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/location">Location</Link>
        <Link className="nav-link" to="/careers">Careers</Link>
        </nav>
        <div className="logout">
          {auth && <Link className="nav-link" to="/account">My account</Link>}
        
        {auth ? <button type="button" className="button button--nobackground " onClick={handleLogout}>Logout</button>
        
      :
         <Button  link="/signin" text="Get Scootin"/> 
        
        
      }
        </div>
        <section style={{top:proportion() + "%"}}  className={activeMenu ? "burgerMenu show" : "burgerMenu"}>
          <section className="burgerContent">
          <nav>
        <a className="nav-link" href="/about">About</a>
        <a className="nav-link" href="/location">Location</a>
        <a className="nav-link" href="/careers">Careers</a>
        </nav>
        {auth ? <Link className=" button button--nobackground" to="/account">My Account</Link>  :
         <a className="button" href="/signin">Get Scootin</a>
        }
        {auth&& <button type="button" className="button  " onClick={handleLogout}>Logout</button>}
       
          </section>
        </section>
      </div>
    );
  }
  
  export default Header;
  