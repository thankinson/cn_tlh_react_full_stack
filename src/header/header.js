import { gTfO } from "../utils"
import "./header.css"

export const Header = ({setUser}) =>{
    return (
        <>
            <div className="header-div">
                <div>{setUser && <h4>loged in as: {setUser}</h4>}</div>
                <div className="header-space"></div>
                <div><button onClick={gTfO}>Log Out</button></div>
            </div>
            
        </>
    )
}