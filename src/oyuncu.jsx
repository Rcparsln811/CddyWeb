import React from 'react'

function Oyuncu({ player }) {
    const { id, title, description, link, image } = player;


    return (
        <div className='oyuncu'>
            <div className='player'>
                <img src={image} width={350} height={500} />
                <div className='deneme'>
                    <h4 className='player-text' >{title}</h4>
                    <h4 className='player-decs' >{description}</h4>
                    <a className='player-link' href={link} >İnstagram</a>
                </div>

            </div>


        </div>
    )
}

export default Oyuncu