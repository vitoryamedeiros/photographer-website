import { useState } from 'react'
import '../assets/navBar.css'

function Navbar() {
    const [count, setCount] = useState(0)
  
    return (
      <section className='navbar_section'>
        <span>PHOTOGRAPHY</span>
        <div className="navbar_li">
            <ul className="navbar_ul">About</ul>
            <ul className="navbar_ul">Gallery</ul>
            <ul className="navbar_ul">Project</ul>
            <ul className="navbar_ul">Contact</ul>
        </div>
      </section>
    )
}
  
export default Navbar
