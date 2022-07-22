import React, { useContext } from "react";
import { Context } from '../store/appContext.js'


function Favorites(){
    const {store, actions} = useContext(Context)

    return(
        <div className="favorites">
            {store.favorites.map((item)=>{
                return <span>{item.name}</span>
            })}
        </div>
    )
}

export default Favorites