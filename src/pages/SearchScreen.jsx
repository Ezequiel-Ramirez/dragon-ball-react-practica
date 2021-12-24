import React, { useState } from 'react'

import { Characters } from '../models/Characters'
import { Link } from 'react-router-dom'

const SearchScreen = () => {

    const [inputValue, setInputValue] = useState()
    const [characters, setCharacters] = useState(Characters)
    
    const handleChange = (e) => {
        const { value } = e.target
        setInputValue(value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const characterFilter = Characters.filter(character => character.name.toLowerCase().includes(inputValue.toLowerCase()))
        console.log(characterFilter)
        setCharacters(characterFilter)
    }
   
    return (
        <div>
            <h1>Searchs</h1>
            <hr />
            <div className='container mt-3 row'>
                <div className='col-md-6'>
                    <h2>Search</h2>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <label >
                            Character:
                            <input type="text" className="form-control w-100" placeholder="Character" autoComplete='off' value={inputValue} onChange={handleChange} />
                        </label>
                        <br />
                        <button type='submit' className="btn btn-info w-100 mt-3">Search</button>
                    </form>
                </div>
                <div className='col-md-6'>
                    <h2>Results</h2>
                    <h1>{characters.length}</h1>
                    <hr />
                    <ul className='list-group w-100'>
                        {
                            characters.map(character => (
                                <li key={character.id} className='list-group-item w-100'>
                                    <div className='row w-100'>
                                        <div className='col-md-4 d-flex justify-content-between align-items-center w-100'>
                                            <img src={`/assets/${character.type}-${character.id}.png`} alt={character.name} className='img-fluid me-2 w-25' />
                                            <div>
                                            <h3 className='text-center me-2'>{character.name}</h3>
                                            <h6 className='text-center me-2'>{character.type === "h" ? `Gendler: Men` : `Gendler: Women`}</h6>
                                            <h6 className='text-center me-2'>{character.description}</h6>
                                            </div>
                                            <div>
                                            <Link className='btn btn-primary ' to={`/character/${character.id}`} > Ver más</Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SearchScreen
