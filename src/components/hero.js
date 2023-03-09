
import './hero.css'
import picture from '../assets/hero_pic.png'
import video from '../assets/hero_vid.mp4'

export default function Hero() {

    return (
        <div>
        <div className="hero">
        <div className="overlay"></div>
            <video src = {video} autoPlay loop muted />
            <div className="hero-content">
                <h1  className ="animate__animated animate__fadeInUp  animate__delay-2s"> Welcome to guns and roses</h1>
                <h2 className = "animate__animated animate__fadeInUp animate__delay-3s">Why would anybody not own a gun? <span style={{fontStyle: 'italic'}}>Joe Manchin</span>  </h2>
                <a style={{textDecoration:'none'}} href="#catalogue "><i class="bi bi-arrow-down" style={{fontSize:"3rem"}}></i></a>
            </div>
        </div>
        </div>
    )
}
