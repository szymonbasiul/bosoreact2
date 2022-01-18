export const sendScoreToDatabase = async (data: object) => {
	console.log("zlo");
	await fetch("http://localhost:8000/", {
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
//sendScoreToDatabase({ playername: `123` });
export default sendScoreToDatabase;
