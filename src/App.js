import { useState } from 'react';
import { Login } from './components/login/login';
import './App.css';

const App = () => {
  const [user, setUser] = useState();
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
        <div className="App">
          {/* ######################### */}

          {user &&<h1>{user.username}</h1>}
          {user ? <h1>{user.username}</h1> : <h1>please type something</h1>}
           <h2>{userName}</h2>
          
          <Login  
              setHandler={submitHnadler} 
              setUser={setUserName} 
              setEmail={setEmail} 
              setPass={setPass} 
              setBool={setBool}
              bool={bool}
          />
            
          
          {/* ######################### */}
        </div>
  );
}

export default App;


//  what use state looks like out of an app
// const useState = (initialVal) => {
//   let state = initialVal;
//   const setState = (newValue) =>{
//     state = newValue
//   }
//   return [state, setState]
// }


// {/* <form onSubmit={(event) => {event.preventDefault(); setUser(userName);}} */}

// if user value is set it renders user.username
// {user &&<h1>{user.username}</h1>}

// if true will render user.username : else renders please type something
// {user ? <h1>{user.username}</h1> : <h1>please type something</h1>}

// ! not, && if, ? true, : else