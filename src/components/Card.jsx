import { Link } from 'react-router-dom'
import React from 'react'

const Card = ({name, id, type}) => {
    const path = `/assets/${type}-${id}.png`
    return (
       
        <div className='card m-3 col-12 col-md-4 text-center mt-auto' style={{maxWidth:"250px"}} key={id}>
        <div className='card-body'>
        <img loading='lazy' src={path} alt={name} className='card-img-top'/>
            <h5 className='card-title'>{name}</h5>
            <p className='card-text'>
                <Link className='btn btn-primary ' to={`/character/${id}`} > Ver más</Link>
            </p>
        </div>
    </div>
   
    )
}

export default Card
