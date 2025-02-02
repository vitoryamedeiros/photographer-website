import '../header/header.css'

function Header() {  
    return (
      <section className='header_section'>
        <span className="navbar_span strongfont">PHOTOGRAPHY</span>
        <div className="navbar_container">
          <div className="navbar_li">
              <a href="#about"><button className="navbar_button strongfont">About</button></a>
              <a href="#gallery"><button className="navbar_button strongfont">Gallery</button></a>
              <a href="#projects"><button className="navbar_button strongfont">Projects</button></a>
          </div>
        </div>


      </section>
  )
}
  
export default Header
