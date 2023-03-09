import './card.css'
import sound from '../assets/assault.mp3'



export default function Card(props) {

    function play() {
        new Audio(sound).play()
    }
    console.log(props.sound)

    return (
        <div className="col">

            <div className="card h-80"
              
                style=
                {{
                    width: '18rem',
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
                }}
                >
                <img src={props.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Origin:{props.origin}</h6>
                    <p className="card-text">{props.description}</p>
                    <a href="#home" class="btn btn-primary">Add to collection</a>
                    <br />
                    <br />
                    <button className="btn btn-primary" onClick={play} ><i class="bi bi-volume-up-fill" style={{ fontSize: '1rem' }}></i></button>
              
                </div>
            </div>
            <br></br>
        </div>
    )
}