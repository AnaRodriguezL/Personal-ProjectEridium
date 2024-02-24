import { React, useEffect } from "react";
import { generateStars, stopGalaxy } from "../utils/homePage";
import "../styles/HomePage.css";

function HomePage() {
	useEffect(() => {
		generateStars();
		stopGalaxy();
	});

	return (
		<div>
			<div className="stars"></div>
			<div className="view">
				{/* <h2>Eridium</h2> */}
				<div className="plane main">
					<div className="circle"></div>
					<div className="circle"></div>
					<div className="circle"></div>
					<div className="circle"></div>
					<div className="circle"></div>
					<div className="circle"></div>
				</div>
				<div className="container">
					<div className="ring"></div>
					<div className="ring"></div>
					<div className="ring"></div>
				</div>
			</div>
		</div>
	);
}

export default HomePage;
