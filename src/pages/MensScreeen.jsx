import Card from '../components/Card'
import { Characters } from '../models/Characters'
import React from 'react'

const MensScreeen = () => {

    const mens = Characters.filter(character => character.type === 'h')

    return (
        <div className='container mt-3'>
            <div className='row d-flex justify-content-center  '>
                <h1>Mens Dragon Ball</h1>
                <hr />
                {
                    mens.map(character => (
                        <Card key={character.id} {...character} />
                    ))
                }
            </div>
        </div>
    )
}

export default MensScreeen
