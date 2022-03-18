import { useState, useEffect } from 'react';
import { Login } from './components/login/login';
import { Home } from './components/home/home';
import { Header } from './header/header';
import { Footer } from './components/footer/footer';
import { tokenLogin } from './utils';
import './App.css';

const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    if (localStorage.key("myToken")) {
      tokenLogin(setUser);
    }
  }, []);

  return (
        <div className="App">
          {/* ######################### */}
          <Header setUser={user}/>
          <div className="content-div">
            {!user ? <Login setUser={setUser}/> : <Home user={user}/> }
          </div>
          
          <Footer />
          {/* ######################### */}        
        </div>
  );
};

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