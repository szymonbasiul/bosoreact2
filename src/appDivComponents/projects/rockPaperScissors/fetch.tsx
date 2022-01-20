import { useEffect, useState, useRef, useCallback } from "react";

export const UseFetch = (score: object) => {
	//const isCurrent = useRef(true)
	//const [state, setState] = useState(true)

	// useEffect(()=>{
	// 	return() =>{
	// 		isCurrent.current =false;
	// 	}
	// },[])
	
	// useEffect(()=>{
	// 	// setState(state => ({
	// 	// 	data: state.data, loading: true
	// 	// }))
	
	 fetch("http://localhost:8000/rpsplayer", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(score),
		})
			.then(x => x.json())
			.then((y) => {
				console.log("Success:", y);
			})
			.catch((error) => {
				console.error("Error:", error);
			})
		
	// }, [score])
	// //return state
};
