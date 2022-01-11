// w tym komponencie pobieramy dane o dzialaniach w core
// 1. Bierzemy wynik klikniecia buttonow playera i komputera - porównujemy to.
// 2. Po porównaniu przypisujemy wartość +1 do wygranej strony.
// 3. Gra toczy sie do 3 wygranych po ktorejs ze stron i konczy sie.
// 4. Po zakonczeniu pojawia sie opcja dodania usera do tablicy wynikow.

import React from "react";

function RPSscore(props) {
	// 1. Bierzemy wynik klikniecia buttonow playera i komputera - porównujemy to.
	const crossCheckResult = () => {
		console.log("elo");
		if (props.cpuResult.rock === true && props.userResult.rock === true) {
			console.log("remis!");
		}
	};
	crossCheckResult();

	console.log(props.cpuResult, props.userResult);

	return <div>0:0</div>;
}

export default RPSscore;
