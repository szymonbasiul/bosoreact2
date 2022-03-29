import React, { useState } from "react";
import RegisterAndLoginInput from "./registerComponents/RegisterAndLoginInput";
import "./RegisterLogin.css";

export default function RegisterLogin() {
	const [login, setLogin] = useState("");
	const [loginPassword, setLoginPassword] = useState("");
	const [registerLogin, setRegisterLogin] = useState("");
	const [registerPassword, setRegisterPassword] = useState("");
	const [registerPasswordConfirmation, setRegisterPasswordConfirmation] =
		useState("");
	const [showLogin, setShowLogin] = useState(true);
	const [conditionalInputBorderStyle, setConditionalInputBorderStyle] =
		useState("");

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
		if (registerPassword === registerPasswordConfirmation) {
			return true;
		} else {
			return false;
		}
	};

	const checkIfStringIsEmpty = (value: string) => {
		if (value === "") return true;
		else return false;
	};
	//function executing 2 condition true or false with 3 atributes( func(true/fale, 1st condition, 2nd condition))
	const changeBorderStyleDependingOnEqualPasswordInputs = () => {
		if (comparePasswordInputValues()) {
			setConditionalInputBorderStyle("typing-box-green");
		} else {
			setConditionalInputBorderStyle("typing-box-red");
		}
	};

	const registerNewUser = () => {
		comparePasswordInputValues() && AddNewUserToDB();
	};

	const validateRegisterComponent = () => {
		comparePasswordInputValues();
		changeBorderStyleDependingOnEqualPasswordInputs();
	};

	//fetch funciton with optional GET/POST, returned variable
	const AddNewUserToDB = async () => {
		console.log("fetch start");
		//condition before fetch start
		//in case two fields are equal proceed with fetch
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
					maxLength={10}
					onChange={(e) => {
						setLogin(e.target.value);
					}}
				/>
				<input
					type="password"
					className="typing-box"
					name="Password"
					placeholder="Password"
					maxLength={10}
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
				<RegisterAndLoginInput
					className={"typing-box"}
					name={"RegisterLogin"}
					placeholder={"Login"}
					callback={(e) => setRegisterLogin(e.target.value)}
				/>

				<RegisterAndLoginInput
					className={
						checkIfStringIsEmpty(registerPassword)
							? "typing-box"
							: `${conditionalInputBorderStyle} typing-box`
					}
					name={"RegisterPassword"}
					placeholder={"Password"}
					callback={(e) => setRegisterPassword(e.target.value)}
					keyUpCallback={validateRegisterComponent}
				/>
				<RegisterAndLoginInput
					className={
						checkIfStringIsEmpty(registerPasswordConfirmation)
							? "typing-box"
							: `${conditionalInputBorderStyle} typing-box`
					}
					name={"RegisterPasswordConfirmation"}
					placeholder={"Confirm password"}
					callback={(e) => setRegisterPasswordConfirmation(e.target.value)}
					keyUpCallback={validateRegisterComponent}
					description={
						!comparePasswordInputValues()
							? "Password does not match!"
							: undefined
					}
				/>
				<button
					className="register-login-button"
					onClick={() => {
						registerNewUser();
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
