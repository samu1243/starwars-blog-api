import React from "react";
import { Link } from "react-router-dom";

 function Links () {
    return(
        <div className="links">
            <div className="card" style={{width: '24rem'}}>
            <img className="card-img-top" src="https://pa1.narvii.com/5924/bfa399b4565737baa6dda8cc641db76590fdf5b1_hq.gif" alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title" style={{color:'yellow'}}>Characters</h5>
                <p className="card-text">Click the button below to get a list of all the different Characters in Star Wars.</p>
                <Link to="/characters" className="btn btn-warning">Go to Characters</Link>
            </div>
            </div>
            <div className="card" style={{width: '24rem'}}>
            <img className="card-img-top" src="https://64.media.tumblr.com/a59b83e1514db09f7a8848879b927b68/600960038e384d1c-01/s540x810/90f89f7ca543365cb1ecdf53fc4796da27e0560b.gifv" alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title" style={{color:'yellow'}}>Planets</h5>
                <p className="card-text">Check out the planets that are mentioned in Star Wars and their descriptions.</p>
                <Link to="/planets" className="btn btn-warning">Go to Planets</Link>
            </div>
            </div>
            <div className="card" style={{width: '24rem'}}>
            <img className="card-img-top" src="https://i.pinimg.com/originals/7c/7e/17/7c7e17b1aafc544010f1acdfbaf273ec.gif" alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title" style={{color:'yellow'}}>Ships</h5>
                <p className="card-text">Hop on and look for an specific ship that you are looking for or would like to know.</p>
                <Link to="/starships" className="btn btn-warning">Go to Ships</Link>
            </div>
            </div>
        </div>

    )
 }

 export default Links