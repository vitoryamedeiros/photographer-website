import '../banner/banner.css'
import photographer_img from '../../assets/photographer-img.jpeg'

function Banner() {  
    return (
        <section className='banner_section'>
            <div className="banner_title_container">
                <h1 className="banner_title strongfont">CAPTURING</h1>
                <h2 className="banner_subtitle strongfont">THE MOMENTS THAT CAPTIVATE YOUR HEART</h2>
            </div>
            <div className="banner_content">
                <div className="banner_about-us_container">
                    <p>Lorem labore ipsum dolor sit adipisicing amet consectetur a ipsum quaerat ipsum dipisicing elit. Rem labore adipisicing esse quaerat, tempore labore fuga error officia officiaofficia officiaoffic iaofficia at aliquid molestias architecto!tempore fuga error officia at aliquid molestias architecto!</p>
                    
                    <div className="banner_about-us_span">
                        <span>ABOUT US</span>
                        <button className="banner_about-us_arrowbutton">arrow</button>
                    </div>
                </div>
                <img className="banner_image" src={photographer_img} alt="photographer image" />
            </div>
        </section>
    )
}
  
export default Banner
