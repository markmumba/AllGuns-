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

        />)

    return (
        <div>
            <div className="catalogue">
                <h3>Gun catalogue</h3>
            </div>
            <div className='container'>
                <div className="row">
                        {eachGun}
                </div>
            </div>

        </div>
    )
}