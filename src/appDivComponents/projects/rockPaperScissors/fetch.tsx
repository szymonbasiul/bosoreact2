import { useEffect, useState, useRef, useCallback } from "react";

export const UseFetch = async (score: object) => {
	await fetch("http://localhost:8000/rpsplayer", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(score),
	})
		.then((x) => x.json())
		.then((y) => {
			console.log("Success:", y);
		})
		.catch((error) => {
			console.error("Error:", error);
		});
};
