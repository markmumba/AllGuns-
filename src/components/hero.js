
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
                <h1> Welcome to guns and roses</h1>
                <h2>Why would anybody not own a gun? <span style={{fontStyle: 'italic'}}>Joe Manchin</span>  </h2>
            </div>
        </div>
        </div>
    )
}