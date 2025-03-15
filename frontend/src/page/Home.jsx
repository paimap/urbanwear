import Banner from "../component/Banner";
import Navbar from "../component/Navbar";
import "../css/Home.css"

function Home() {
    return(<>
        <div className="home-content">
            <Banner/>
            <div className="brand-div">
                <p>Brand</p>
                <div className="brand-list">
                    <div className="first-row">
                        <div className="brand-item">
                            <img src="./public/the-executive-logo.png" alt="" className="the-executive-logo"/>
                        </div>
                        <div className="brand-item">
                            <img src="./public/thanksinsomnia-logo.jpeg" alt="" className="thanksinsomnia-logo"/>
                        </div>
                        <div className="brand-item">
                            <img src="./public/erigo-logo.jpg" alt="" className="erigo-logo"/>
                        </div>
                    </div>
                    <div className="second-row">
                        <div className="brand-item">
                        <img src="./public/kanky-logo.jpeg" alt="" className="kanky-logo"/>
                        </div>
                        <div className="brand-item">
                        <img src="./public/compass-logo.webp" alt="" className="compass-logo"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Home;