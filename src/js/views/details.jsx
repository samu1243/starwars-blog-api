import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";



function Details (){
    const {store, actions} = useContext(Context)
    const params = useParams()
    useEffect(()=>{
        actions.getPlanet(params.id)
    })

    return(
        <>
        <div className="details">
            <div className="text-div">
                <p className="text-title" style={{color: 'yellow'}}>{store.planet.name}</p>
                <div className="properties">
                <div className="description">
                    <p style={{color:'#ffc107'}}>Rotation Period {''}<i className="fa-solid fa-rotate"></i></p>
                    <p>{store.planet.rotation_period}</p>
                </div>
                <div className="description">
                    <p style={{color:'#ffc107'}}>Orbital Period{''}<i className="fa-solid fa-globe"></i></p>
                    <p>{store.planet.orbital_period}</p>
                </div>
                <div className="description">
                    <p style={{color:'#ffc107'}}>Diameter <i className="fa-solid fa-circle-notch"></i></p>
                    <p>{store.planet.diameter}</p>
                </div>
                <div className="description">
                    <p style={{color:'#ffc107'}}>Climate <i className="fa-solid fa-cloud-showers-heavy"></i></p>
                    <p>{store.planet.climate}</p>
                </div>
                <div className="description">
                    <p style={{color:'#ffc107'}}>Gravity <i className="fa-brands fa-grav"></i></p>
                    <p>{store.planet.gravity}</p>
                </div>
                <div className="description">
                    <p style={{color:'#ffc107'}}>Terrain<i className="fa-solid fa-mountain-sun"></i></p>
                    <p>{store.planet.terrain}</p>
                </div>
                <div className="description">
                    <p style={{color:'#ffc107'}}>Surface Water<i className="fa-solid fa-water"></i></p>
                    <p>{store.planet.surface_water}</p>
                </div>
                <div className="description">
                    <p style={{color:'#ffc107'}}>Population<i className="fa-solid fa-people-group"></i></p>
                    <p>{store.planet.population}</p>
                </div>
                </div>
            </div>
            <div>
        <img src={`https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg`} className="card-img " onError={(e) => {
							e.target.onerror = null
							e.target.src = 'https://cdn.mos.cms.futurecdn.net/HoV9PTARj4sSSKHq8ScVFB.jpg'
						}}  />
            </div>
        </div>
            <div className="buttons">
                <Link to='/planets' className="button-36">Take me back to Planets!</Link>
                <Link to='/' className="button-36">Take me back to Home!</Link>
            </div>
        </>
    )
}

export default Details