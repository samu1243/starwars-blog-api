import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";



function DetailsShip (){
    const {store, actions} = useContext(Context)
    const params = useParams()
    useEffect(()=>{
        actions.getShip(params.id)
    })

    return(
        <>
        <div className="details">
            <div className="text-div">
                <p className="text-title" style={{color: 'yellow'}}>{store.ship.name}</p>
                <div className="properties">
                <div className="description">
                    <p style={{color:'#ffc107'}}>Model <i class="fa-solid fa-plane"></i></p>
                    <p>{store.ship.model}</p>
                </div>
                <div className="description">
                    <p style={{color:'#ffc107'}}>Manufacturer<i class="fa-solid fa-industry"></i></p>
                    <p>{store.ship.manufacturer}</p>
                </div>
                <div className="description">
                    <p style={{color:'#ffc107'}}>Cost in Credits<i class="fa-solid fa-coins"></i></p>
                    <p>{store.ship.cost_in_credits}</p>
                </div>
                <div className="description">
                    <p style={{color:'#ffc107'}}>Length <i class="fa-solid fa-ruler-horizontal"></i></p>
                    <p>{store.ship.length}</p>
                </div>
                <div className="description">
                    <p style={{color:'#ffc107'}}>Max Atmosphering Speed <i class="fa-solid fa-gauge-high"></i></p>
                    <p>{store.ship.max_atmosphering_speed}</p>
                </div>
                <div className="description">
                    <p style={{color:'#ffc107'}}>Crew<i class="fa-solid fa-person-military-rifle"></i></p>
                    <p>{store.ship.crew}</p>
                </div>
                <div className="description">
                    <p style={{color:'#ffc107'}}>Passengers<i class="fa-solid fa-people-group"></i></p>
                    <p>{store.ship.passengers}</p>
                </div>
                <div className="description">
                    <p style={{color:'#ffc107'}}>Cargo Capacity<i class="fa-solid fa-truck"></i></p>
                    <p>{store.ship.cargo_capacity}</p>
                </div>
                <div className="description">
                    <p style={{color:'#ffc107'}}>Hyperdrive Rating<i class="fa-solid fa-star"></i></p>
                    <p>{store.ship.hyperdrive_rating}</p>
                </div>
                <div className="description">
                    <p style={{color:'#ffc107'}}>Starship Class<i class="fa-solid fa-plane-up"></i></p>
                    <p>{store.ship.starship_class}</p>
                </div>
                </div>
            </div>
            <div>
        <img src={`https://starwars-visualguide.com/assets/img/starships/${params.id}.jpg`} className="card-img " onError={(e) => {
							e.target.onerror = null
							e.target.src = 'https://cdn.mos.cms.futurecdn.net/HoV9PTARj4sSSKHq8ScVFB.jpg'
						}}  />
            </div>
        </div>
            <div className="buttons">
                <Link to='/starships' className="button-36">Take me back to Ships!</Link>
                <Link to='/' className="button-36">Take me back to Home!</Link>
            </div>
        </>
    )
}

export default DetailsShip