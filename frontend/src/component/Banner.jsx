import "../css/Banner.css"

function Banner() {
    return(
        <div className="banner">
                <div className="banner-overlay"></div>
                <img src="./public/banner.jpg" alt="" className='banner-img'/>
                <h1 className='banner-text'>Embracing Indonesian Culture</h1>
            </div>
    )
}

export default Banner;