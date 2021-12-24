import { Characters } from '../models/Characters'
import React from 'react'
import { useParams } from 'react-router'

const CharactersScreen = () => {

    const { id } = useParams()

    const character = Characters.find(character => character.id === id)
    const path = `/assets/${character.type}-${character.id}.png`
    
    const handleBack = () => {
        window.history.back()
    }

    return (
        <div className='container row'>
            <div className='col-8 text-center'>
                <img src={path} alt={id} className='img-thumbnail mt-5' style={{ height:"400px"}}/>
            </div>
            <div className='col-4 mt-5'>
                <h2>{character.name}</h2>
                <p>{character.description}</p>
                <button onClick={handleBack} className='btn btn-warning'>Volver</button>
                
            </div>

        </div>
    )
}

export default CharactersScreen
