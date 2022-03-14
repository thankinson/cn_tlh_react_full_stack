
import { useState } from "react";
import "./login.css";


export const Login = ({setUser}) => {
    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const [bool, setBool] = useState();
   
  const submitHnadler = (e) => {
    // e is shorthand for event
    e.preventDefault();
    if (email.includes("@")) {
        setUser({ username: userName, email: email, pass: pass });
    }    
    // setUser({username: userName, email: email, pass: pass});
   
  }

    return (
        <>
            <form className="formContent" onSubmit={submitHnadler}>
            <div className="loginContainer">
                <div className="loginDiv">
                    <h1>InstaCrap</h1>
                    
                    {!bool && <input className="inputCreds " onChange={(event) => setUserName(event.target.value)} placeholder="username" />}
                    <input className="inputCreds " onChange={(event) => setEmail(event.target.value)} placeholder="email" type="emails" />
                    <input className="inputCreds" onChange={(event) => setPass(event.target.value)} placeholder="password" type="password" />
                    <button className="inputCreds" type="submit" onClick={() => setBool(!bool)}>Submit</button>
                </div>
                    <div className="space"></div>

                <div className="signUp">
                    <h4>Sign Up</h4>
                </div>
    
            </div>
            </form>

            
        </>
    )
};



{/* <form onSubmit={submitHnadler}>
{!bool && <input onChange={(event) => setUserName(event.target.value)} placeholder="username" />}
<input onChange={(event) => setEmail(event.target.value)} placeholder="email" type="emails" />
<input onChange={(event) => setPass(event.target.value)} placeholder="password" type="password" />
<button type="submit" onClick={() => setBool(!bool)}>Submit</button>
</form> */}
