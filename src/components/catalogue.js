import './catalogue.css'
import Card from './card'
import gundata from '../data'

export default function Catalogue() {



    const eachGun = gundata.map(gun =>
        <Card
            title={gun.name}
            description={gun.description}
            image={gun.image}
            origin={gun.origin}
            sound = {`.${gun.sound}`}
        />)
    
    

    return (
        <div>
            <div   className="catalogue">
                <h3>Gun catalogue</h3>
            </div>
            <div id="catalogue" className='container'>
                <div className="row gy-3">
                        {eachGun}
                </div>
            </div>

        </div>
    )
}