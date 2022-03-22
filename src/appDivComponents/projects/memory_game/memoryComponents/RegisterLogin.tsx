import React, { useState } from "react";
import "./RegisterLogin.css";

export default function RegisterLogin() {
	const [login, setLogin] = useState("");
	const [loginPassword, setLoginPassword] = useState("");
	const [registerLogin, setRegisterLogin] = useState("");
	const [registerPassword, setRegisterPassword] = useState("");
	const [registerPasswordConfirmation, setRegisterPasswordConfirmation] =
		useState("");
	const [showLogin, setShowLogin] = useState(true);
	const [borderOnCompare, setBorderOnCompare] = useState("");

	const toggleShowLogin = () => {
		setShowLogin(!showLogin);
	};

	const loginOnServer = () => {
		fetch("http://localhost:8000/login", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({ login: login, password: loginPassword }),
		});
	};

	const comparePasswordInputValues = () => {
		//setRegisterPassword(e.target.value);

		if (registerPassword === registerPasswordConfirmation) {
			console.log("Equal!", registerPassword, registerPasswordConfirmation);
			return true;
		} else {
			console.log("No equal!");
			return false;
		}
	};

	const changeBorderOnEqualPasswordInputs = () => {
		if (comparePasswordInputValues() === true) {
			setBorderOnCompare("typing-box-green");
		} else {
			setBorderOnCompare("typing-box-red");
		}
	};

	const registerOnServer = async () => {
		await fetch("http://localhost:8000/memory/register", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({
				registerNewUserName: registerLogin,
				registerNewPassword: registerPassword,
			}),
		})
			.then((response) => response.json())
			.then((response) => console.log(response, "Should be status here"))
			.catch((error) => {
				console.log(error);
			});
	};

	const LoginForm = (
		<div>
			<div className="log-in-form">
				<input
					type="text"
					className="typing-box"
					name="Login"
					placeholder="Login"
					onChange={(e) => {
						setLogin(e.target.value);
					}}
				/>
				<input
					type="password"
					className="typing-box"
					name="Password"
					placeholder="Password"
					onChange={(e) => {
						setLoginPassword(e.target.value);
					}}
				/>
				<button
					className="register-login-button"
					onClick={() => {
						loginOnServer();
					}}
				>
					Login
				</button>
				<button
					className="register-login-button"
					onClick={() => {
						toggleShowLogin();
					}}
				>
					Register Yourself!
				</button>
			</div>
		</div>
	);

	const RegisterForm = (
		<div>
			<div className="sign-in-form">
				<input
					type="text"
					className="typing-box"
					name="RegisterLogin"
					placeholder="Login"
					onChange={(e) => {
						setRegisterLogin(e.target.value);
					}}
				/>
				<input
					type="text"
					className={`${borderOnCompare} typing-box`}
					name="RegisterPassword"
					placeholder="Password"
					onChange={(e) => {
						setRegisterPassword(e.target.value);
						//comparePasswordInputValues(event);
					}}
					onKeyUp={() => {
						comparePasswordInputValues();
						changeBorderOnEqualPasswordInputs();
					}}
				/>
				<input
					type="text"
					className={`${borderOnCompare} typing-box`}
					name="RegisterPasswordConfirmation"
					placeholder="Confirm password"
					onChange={(e) => {
						setRegisterPasswordConfirmation(e.target.value);
						//comparePasswordInputValues();
					}}
					onKeyUp={() => {
						comparePasswordInputValues();
						changeBorderOnEqualPasswordInputs();
					}}
				/>
				<button
					className="register-login-button"
					onClick={() => {
						registerOnServer();
					}}
				>
					Register
				</button>
				<button
					className="register-login-button"
					onClick={() => {
						toggleShowLogin();
					}}
				>
					Back to log-in
				</button>
			</div>
		</div>
	);
	return <>{showLogin ? LoginForm : RegisterForm}</>;
}
