const muscleCarButton = document.getElementById("muscle-car-button");
		const sportsCarButton = document.getElementById("sports-car-button");
		const classicCarButton = document.getElementById("classic-car-button");

		const muscleCarSound = new Audio("https://ia601309.us.archive.org/4/items/car-engines/10%20Ford%20Mustang.ogg");
		const sportsCarSound = new Audio("https://ia601309.us.archive.org/4/items/car-engines/17%20Mitsubishi%20Lancer%20EVO%20RS%20Turbo.ogg");
		const classicCarSound = new Audio("https://ia801309.us.archive.org/4/items/car-engines/20%20Shelby%20GT500.ogg");

		muscleCarButton.addEventListener("click", () => {
			muscleCarSound.play();
		});

		sportsCarButton.addEventListener("click", () => {
			sportsCarSound.play();
		});

		classicCarButton.addEventListener("click", () => {
			classicCarSound.play();
		});