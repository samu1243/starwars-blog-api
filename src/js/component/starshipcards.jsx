import React, { useState, useEffect, useContext } from "react";
import Cards from "./cards.jsx";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router";

function StarshipCards () {
    const {store, actions} = useContext(Context)
    const params = useParams()
    useEffect(() => {
        actions.getShips(params.id)
    }, [])


    return(
        <div className="people-cards">
        {store.ships.map((ships, i)=>{
            let url = ships.url.split("/")[5]
            return(
                <div className="people">
                    <Cards
                    key={`${ships.name}${i}`}
                    title={`${ships.name[0].toUpperCase()}${ships.name.slice(1)}`}
                    button={`Go to ${ships.name}`}
                    url={`/starships/${url}`}
                    image={`https://starwars-visualguide.com/assets/img/starships/${url}.jpg`}
                    item={ships}
                    />
                </div>
                
            )
        })}
        </div>
    )
}

export default StarshipCards