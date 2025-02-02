import '../about/about.css'
import photographer_img2 from '../../assets/photographer-img2.jpeg'
import photographer_img3 from '../../assets/photographer-img3.jpeg'
import photographer_img4 from '../../assets/photographer-img4.jpeg'

function About() {  
    return (
        <section className='about_section'>
            <div className="about_text-content">
                <p className="about_section-paragrapher">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolor, cumque nemo eveniet quas praesentium recusandae quod iure molestias hic, amet veniam excepturi corrupti magni tenetur, aperiam rerum earum voluptas. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum ipsam, possimus dolores recusandae laborum voluptatem eius, quae suscipit distinctio incidunt ratione. Nesciunt voluptatibus molestias cumque repudiandae aut consequatur, saepe!</p>
                <span className="about_section-title strongfont">ABOUT <br /> ME</span>
            </div>
            <div className="about_images">
                <img src={photographer_img2} alt="" className="about_card-image" />
                <img src={photographer_img3} alt="" className="about_card-image" />
                <img src={photographer_img4} alt="" className="about_card-image" />
            </div>
        </section>
    )
}
  
export default About
