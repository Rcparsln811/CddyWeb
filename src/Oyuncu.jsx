import React from 'react'

function Oyuncu({ player }) {
    const { id, title, description, link, image } = player;


    return (
        <div className='oyuncu'>
            <div>
                <img src={image} width={350} height={500} />
                <h4>{title}</h4>
                <h5>{description}</h5>
                <h6>{link}</h6>
            </div>


        </div>
    )
}

export default Oyuncu