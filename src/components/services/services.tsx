import '../services/services.css'
// import service_merry from '../../assets/service-merry.jpeg'
// import service_videomaker from '../../assets/service-videomaker.jpeg'
// import service_autom from '../../assets/service-autom.jpeg'
// import service_utom2 from '../../assets/service-autom2.jpeg'

function Services() {  
    return (
        <section id='services' className='services_section'>
            <h2 className="services_title strongfont">SER <br /> VI <br />CES</h2>
            <div className="services_cards">
                <div className="service_card merry">
                    {/* <img src={service_merry} alt="" className="service_img" /> */}
                    <h3 className="service_name strongfont">Merry Photographer</h3>
                    <span className="service_year"></span>
                </div>
                <div className="service_card videomaker">
                    {/* <img src="" alt="" className="service_img" /> */}
                    <h3 className="service_name strongfont">VIDEOMAKER</h3>
                    <span className="service_year"></span>
                </div>
                <div className="service_card autom">
                    {/* <img src="" alt="" className="service_img" /> */}
                    <h3 className="service_name strongfont">AUTOMOBILISTC</h3>
                    <span className="service_year"></span>
                </div>
            </div>
        </section>
    )
}
  
export default Services
