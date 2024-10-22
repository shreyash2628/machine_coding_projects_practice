import React, { useState } from 'react';
import './css/StarRating.css';

const StarRating = () => {
    const [star, setStar] = useState(Array(5).fill(false));
   
    const handle = (index) => {
        let updatedStars = [...star]
        for(let i=0;i<5;i++)
        {
            updatedStars[i] = false;
        }
        for (let i = 0; i <= index; i++) {
            updatedStars[i] = true;
        }
        setStar(updatedStars)
    }
    return (
        <div className='head'>
            {
                star.map((data, index) => {
                    return (
                        data ? <button className='selectedbox' onClick={() => handle(index)}>

                        </button> : <button className='notselectedbox' onClick={() => handle(index)}>

                        </button>
                    )
                })
            }
        </div>
    )
}

export default StarRating