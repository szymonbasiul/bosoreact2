import React, { useState } from "react";

export default function RegisterLogin(){
const [login, setLogin] =useState("")
const [loginPassword,setLoginPassword] = useState("")
const [registerLogin, setRegisterLogin] = useState("")
const [registerPassword, setRegisterPassword] = useState("")
const [registerPasswordConfirmation, setRegisterPasswordConfirmation] = useState("")

const loginOnServer = () => {
  fetch('http://localhost:8000/login',{
    method: 'POST',
    headers: {'content-type':'application/json'},
    body: JSON.stringify({'login':login,'password':loginPassword})
  })

}

const registerOnServer = () => {
  fetch('http://localhost:8000/register',{
    method: 'POST',
    headers: {'content-type':'application/json'},
    body: JSON.stringify({'registerLogin':registerLogin,
    'registerPassword':registerPassword,
    'registerPasswordConfirmation':registerPasswordConfirmation})
  })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))

}

    const registerAndLoginForm =(
      <div>
        <div className="log-in-form">
          <input type="text" className="typing-box" name="Login" onChange={(e)=>{setLogin(e.target.value)}}/>
          <input type="password" className="typing-box" name="Password" onChange={(e)=>{setLoginPassword(e.target.value)}}/>
          <button onClick={()=>{loginOnServer()}}>Login</button>
        </div>
        <div className="sign-in-form">
          <input type="text" className="typing-box" name="RegisterLogin" onChange={(e)=>{setRegisterLogin(e.target.value)}}/>
          <input type="text" className="typing-box" name="RegisterPassword" onChange={(e)=>{setRegisterPassword(e.target.value)}}/>
          <input type="text" className="typing-box" name="RegisterPasswordConfirmation" onChange={(e)=>{setRegisterPasswordConfirmation(e.target.value)}}/>
          <button onClick={()=>{registerOnServer()}}>Register</button>
        </div>
        </div>
    )

    return(<>
    {registerAndLoginForm}
    </>)
}