import Card from '../components/Card'
import { Characters } from '../models/Characters'
import React from 'react'

const WomensScreen = () => {

    const womens = Characters.filter(character => character.type === 'm')
    return (
        <div className='container mt-3'>
        <div className='row d-flex justify-content-center'>
            <h1>Womens Dragon Ball</h1>
            <hr />
            {
                womens.map(character => (
                    <Card key={character.id} {...character} />
                ))
            }
        </div>
    </div>
    )
}

export default WomensScreen
