import { useState } from 'react'
import { Rating } from '../../components/Rating'

export const RatingPage = () => {
    const [rating, setRating] = useState(0)

    return (
        <div className='container'>
            <h1 className='title'>Classificação</h1>
            <div className='rating-area'>
                <p className='paragraph'>{rating}</p>
                <Rating value={rating} onChange={setRating} />
            </div>
        </div>
    )
}
