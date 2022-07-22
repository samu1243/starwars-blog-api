import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";



function Cards ({title, text, button, url, image, item}) {
    const {store, actions} = useContext(Context)

    return(
            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={image} onError={(e) => {
							e.target.onerror = null
							e.target.src = 'https://cdn.mos.cms.futurecdn.net/HoV9PTARj4sSSKHq8ScVFB.jpg'
						}} />
                <div className="card-body">
                <button className="button-80" onClick={()=>{actions.saveFavorite(item.name)}}><i className="fas fa-heart"></i></button>
                <h5 className="card-title" style={{color:'yellow'}}>{title}</h5>
                <p className="card-text">{text}</p>
                <Link to={url} className="btn btn-warning">{button}</Link>
                </div>
            </div>
    )
}

export default Cards