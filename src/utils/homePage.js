function generateStars(numberOfStars = 25) {
	for (let i = 0; i < numberOfStars; i++) {
		const star = document.createElement("div");
		star.className = "stars";

		star.style.left = `${Math.random() * 100}%`;
		star.style.top = `${Math.random() * 100}%`;

		star.style.animationDuration = `${Math.random() * 5 + 1}s`; // Duración variable para más naturalidad
		star.style.width = `${Math.random() * 2 + 1}px`; // Tamaño variable para diversidad
		star.style.height = star.style.width;
		document.body.appendChild(star);
	}
}


function stopGalaxy() {
	// const h2 = document.querySelector("h2");
	// const planeMain = document.querySelector(".plane.main");

	// h2.addEventListener("mouseenter", function () {
	// 		planeMain.style.animationPlayState = "paused";
	// 	});

	// h2.addEventListener("mouseleave", function () {
	// 		planeMain.style.animationPlayState = "running";
	// 	});
}

export { generateStars, stopGalaxy };