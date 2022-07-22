import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";



function DetailsC (){
    const {store, actions} = useContext(Context)
    const params = useParams()
    useEffect(()=>{
        actions.getCharacter(params.id)
    })

    return(
        <>
        <div className="details">
            <div className="text-div">
                <p className="text-title" style={{color: 'yellow'}}>{store.character.name}</p>
                <div className="properties">
                <div className="description">
                    <p style={{color:'#ffc107'}}>Height <i className="fa-solid fa-ruler-vertical"></i></p>
                    <p>{store.character.height}</p>
                </div>
                <div className="description">
                    <p style={{color:'#ffc107'}}>Mass{''}<i class="fa-solid fa-weight-hanging"></i></p>
                    <p>{store.character.mass}</p>
                </div>
                <div className="description">
                    <p style={{color:'#ffc107'}}>Hair Color<i class="fa-solid fa-ethernet"></i></p>
                    <p>{store.character.hair_color}</p>
                </div>
                <div className="description">
                    <p style={{color:'#ffc107'}}>Skin Color <i class="fa-solid fa-palette"></i></p>
                    <p>{store.character.skin_color}</p>
                </div>
                <div className="description">
                    <p style={{color:'#ffc107'}}>Eye Color <i class="fa-solid fa-eye"></i></p>
                    <p>{store.character.eye_color}</p>
                </div>
                <div className="description">
                    <p style={{color:'#ffc107'}}>Birth Year<i class="fa-solid fa-cake-candles"></i></p>
                    <p>{store.character.birth_year}</p>
                </div>
                <div className="description">
                    <p style={{color:'#ffc107'}}>Gender<i class="fa-solid fa-mars-and-venus-burst"></i></p>
                    <p>{store.character.gender}</p>
                </div>
                </div>
            </div>
            <div>
        <img src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`} className="card-img " onError={(e) => {
							e.target.onerror = null
							e.target.src = 'https://cdn.mos.cms.futurecdn.net/HoV9PTARj4sSSKHq8ScVFB.jpg'
						}}  />
            </div>
        </div>
            <div className="buttons">
                <Link to='/characters' className="button-36">Take me back to Characters!</Link>
                <Link to='/' className="button-36">Take me back to Home!</Link>
            </div>
        </>
    )
}

export default DetailsC