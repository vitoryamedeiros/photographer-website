import '../header/header.css'
import logo_img from '../../assets/logo-cam.png'

function Header() {  
    return (
      <section className='header_section'>
        <div className="header_logo-container">
          <img src={logo_img} alt="" className="header_logo-img" />
          <span className="navbar_span strongfont">PHOTOGRAPHY</span>
        </div>
        <div className="navbar_container">
          <div className="navbar_li">
              <a href="#about"><button className="navbar_button strongfont">About</button></a>
              <a href="#services"><button className="navbar_button strongfont">Services</button></a>
              <a href="#gallery"><button className="navbar_button strongfont">Gallery</button></a>
          </div>
        </div>


      </section>
  )
}
  
export default Header
