export const Login = ({setUser, setEmail, setPass, setBool, setHandler, bool}) => {
    return (
        <>
            <form onSubmit={setHandler}>
              {!bool && <input onChange={(event) => setUser(event.target.value)} placeholder="username" />}
              <input onChange={(event) => setEmail(event.target.value)} placeholder="email"/>
              <input onChange={(event) => setPass(event.target.value)} placeholder="password" />
              <button type="submit" onClick={() => setBool(!bool)}>Submit</button>
            </form>
        </>
    )
};