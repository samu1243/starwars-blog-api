import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext.js";
import Cards from "./cards.jsx";


function PeopleCards () {

    const {store, actions} = useContext(Context)
    const params = useParams()
    

    useEffect(() => {
        actions.getCharacters(params.id)
    }, [])

    return(
        <div className="people-cards">
        {store.characters.map((people, id)=>{
            let url = people.url.split("/")[5]
            return(
                <div className="people">
                    <Cards
                    key={people.name}
                    title={`${people.name[0].toUpperCase()}${people.name.slice(1)}`}
                    button={`Go to ${people.name}`}
                    url={`/characters/${url}`}
                    image={`https://starwars-visualguide.com/assets/img/characters/${url}.jpg`}
                    item={people}
                    />
                </div>
                
            )
        })}
        </div>
    )
}

export default PeopleCards