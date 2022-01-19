
export const sendScoreToDatabase = async (data: object) => {
	await fetch("http://localhost:8000/rpsplayer", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	})
		.then((response) => response.json())
		.then((data) => {
			console.log("Success:", data);
		})
		.catch((error) => {
			console.error("Error:", error);
		});
};
export default sendScoreToDatabase;
