import React, { useRef } from 'react'
import './Nav.css'
import {Link} from "react-scroll"
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';

function Nav() {
    let menu=useRef();
    let mobile=useRef();
    useGSAP(()=>{
        let t1=gsap.timeline()
        t1.from(" nav h1",{
            y:-100,
            duration:0.7,
            opacity:0
        })
        t1.from("nav ul li",{
            y:-100,
            duration:0.9,
            opacity:0,
            stagger:1
        })


    })


    return (
    <nav>
        <h1>PORTFOLIO</h1>
        <ul className='desktopmenu'>
            <Link to="home" smooth={true} spy={true}  duration={800} activeClass='active' ><li>Home</li></Link>
            <Link to="about"  smooth={true}   spy={true} duration={900} activeClass='active'><li>About</li></Link>
            <Link to='projects'  smooth={true}  spy={true} duration={600} activeClass='active'><li>Projects</li></Link>
            <Link to='certificates'  smooth={true}  spy={true} duration={600} activeClass='active'><li>Certificates</li></Link>
            <Link to='contact'  smooth={true}  spy={true} duration={600} activeClass='active'><li>Contact</li></Link>
            </ul>
            <div className="hamburger" ref={menu} 
            onClick={()=>{mobile.current.classList.toggle("activemobile")
                menu.current.classList.toggle("activeham")
                
            }}>
                <div className="ham"></div>
                <div className="ham"></div>
                <div className="ham"></div>

            </div>
            <ul className='mobilemenu' ref={mobile}>
            <Link to="home" smooth={true} spy={true}  duration={600} activeClass='active' ><li>Home</li></Link>
            <Link to="about"  smooth={true}   spy={true} duration={600} activeClass='active'><li>About</li></Link>
            <Link to='projects'  smooth={true}  spy={true} duration={600} activeClass='active'><li>Projects</li></Link>
            <Link to='contact'  smooth={true}  spy={true} duration={600} activeClass='active'><li>Contact</li></Link>
            </ul>

    
</nav>  
    )
}

export default Nav

