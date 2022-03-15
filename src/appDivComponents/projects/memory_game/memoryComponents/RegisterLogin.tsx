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

	const registerOnServer = () => {
		fetch("http://localhost:8000/register", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({
				registerLogin: registerLogin,
				registerPassword: registerPassword,
				registerPasswordConfirmation: registerPasswordConfirmation,
			}),
		})
			.then((res) => res.json())
			.then((data) => console.log(data))
			.catch((error) => console.error(error));
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
					className="typing-box"
					name="RegisterPassword"
					placeholder="Password"
					onChange={(e) => {
						setRegisterPassword(e.target.value);
					}}
				/>
				<input
					type="text"
					className="typing-box"
					name="RegisterPasswordConfirmation"
					placeholder="Confirm password"
					onChange={(e) => {
						setRegisterPasswordConfirmation(e.target.value);
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
