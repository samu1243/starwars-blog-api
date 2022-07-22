import React, { useState, useEffect, useContext } from "react";
import Cards from "./cards.jsx";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router";

function PlanetsCard () {
    const {store, actions} = useContext(Context)
    const params = useParams()

    useEffect(() => {
        actions.getPlanets(params.id)
    }, [])

    return(
        <div className="people-cards">
        {store.planets.map((planets, i)=>{
            let url = planets.url.split("/")[5]
            return(
                <div className="people">
                    <Cards
                    key={`${i}`}
                    title={`${planets.name[0].toUpperCase()}${planets.name.slice(1)}`}
                    button={`Go to ${planets.name}`}
                    url={`/planets/${url}`}
                    image={`https://starwars-visualguide.com/assets/img/planets/${url}.jpg`}
                    item={planets}
                    />
                </div>
                
            )
        })}
        </div>
    )
}

export default PlanetsCard