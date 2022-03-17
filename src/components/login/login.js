import { useState } from "react";
import { createUser, login } from "../../utils";
import "./login.css";

export const Login = ({setUser}) => {
    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const [bool, setBool] = useState(false);
    const [log, setLog] = useState(false)
   
  const submitHnadler = (e) => {
// e is shorthand for event
e.preventDefault();  
    if (bool) {
        login(userName, pass, setUser)
    } else {
        if (email.includes("@")) {
            createUser(userName, email, pass, setUser)
        }
    }
};    
    // setUser({username: userName, email: email, pass: pass});
    return (
        <>
            <form className="formContent" onSubmit={submitHnadler}>
            <div className="loginContainer">
                <div className="loginDiv">
                    <h1>InstaCrap</h1>
                    <input className="inputCreds " onChange={(event) => setUserName(event.target.value)} placeholder="username" />
                    {!bool && <input className="inputCreds " onChange={(event) => setEmail(event.target.value)} placeholder="email" type="emails" />}
                    <input className="inputCreds" onChange={(event) => setPass(event.target.value)} placeholder="password" type="password" />
                    {!bool && <button className="inputCreds" type="submit" onClick={() => setBool(bool)}>Register</button>}
                    {bool && <button className="inputCreds" type="submit" onClick={() => setLog(log)}>Log In</button>}
                </div>
                    <div className="space"></div>
                <div className="signUp">
                
                    {!bool && <button className="inputCreds" type="submit" onClick={() => setBool(!bool)}>Log In</button>}
                    {/* {bool && <h4>Enter Details to Sign Up</h4>} */}
                    {bool && <button className="inputCreds" type="submit" onClick={() => setBool(!bool)}>Sign Up</button>}
                
                </div>
            </div>
            </form>
       
        </>
    )
};



