
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
    setUser({username: userName, email: email, pass: pass});
  }

    return (
        <>
            <div className="loginContainer">
                <div className="loginDiv">
                <h1>hello world</h1>
                <form onSubmit={submitHnadler}>
                {!bool && <input onChange={(event) => setUserName(event.target.value)} placeholder="username" />}
                <input onChange={(event) => setEmail(event.target.value)} placeholder="email" type="emails" />
                <input onChange={(event) => setPass(event.target.value)} placeholder="password" type="password" />
                <button type="submit" onClick={() => setBool(!bool)}>Submit</button>
                </form>
                </div>

                <div className="space">

                </div>

                <div className="signUp">
                    <h2>hello all</h2>
                </div>
                
         

            </div>

                                {/* <form onSubmit={submitHnadler}>
                    {!bool && <input onChange={(event) => setUserName(event.target.value)} placeholder="username" />}
                    <input onChange={(event) => setEmail(event.target.value)} placeholder="email" type="emails" />
                    <input onChange={(event) => setPass(event.target.value)} placeholder="password" type="password" />
                    <button type="submit" onClick={() => setBool(!bool)}>Submit</button>
                    </form> */}

        </>
    )
};