import logo from "../assets/Bitmaplogo.png"
import banner from "../assets/banner.png"
const Home = () => {
    return (
        <div className="home_container">
            <div className="header">
                <div>
                    <img src={logo} alt="logo" className="logo" />
                </div>
                <div className="btn_container">
                    <button className="header_btn">Service</button>
                    <button className="header_btn" >About Us</button>
                    <button className="header_btn">Blogs</button>
                    <button className="header_btn">Case Studies</button>
                    <button className="contact-btn">CONTACT US</button>
                </div>

            </div>
            <div className="content_container">
                <div className="content">
                    <div>

                    <h1>HOW MUCH </h1>
                    <h1>COULD YOU SAVE? </h1>
                    </div>
                    <div>

                    <p className="desciption">
                    Answer the questions below to get a fixed price quotation for us to take your accountancy hassles away from you.
                    </p>
                    </div>
                    <div className="turnover_cotent">
                        <p className="turnover_decs">Is your turnover expected to be more than £85k?</p>
                        <div className="turnover_btn_container">

                        <button className="turnover_btn">yes</button>
                        <button className="turnover_btn">No</button>
                        </div>
                    </div>
                    <p className="desciption">Takes less than 30 seconds</p>
                </div>
                <div className="banner_container">
                    <img src={banner} alt="banner"  className="banner"/>
                </div>
            </div>
        </div>
        
    )
}
export default Home;