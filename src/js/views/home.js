import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Slider from "../component/carousel.jsx";
import Links from "../component/links.jsx";

export const Home = () => (
	<div>
		<div className="home">
		<div id="home-title">
			<p>Discover your favorite</p>
			<p ><span className="star-wars">Star Wars</span> Planets,</p>
			<p>Characters, and more!</p>
		</div>
		<Slider/>
		</div>
		<div>
			<Links/>
		</div>

	</div>
);
