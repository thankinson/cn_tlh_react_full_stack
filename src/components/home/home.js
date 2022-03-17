import { useState } from "react";
import { deleteUser, updatePass } from "../../utils";
import { PhotoContainer } from "../photoContainer/photo";
import "./home.css";

export const Home = (user) => {
    const [photos, setPhotos] = useState([]);
    const [pho, setPho] = useState(false);
    const [passUpdate, setPass] = useState();

  
    const fetchPhotos = async () => {
        try {
            const repsonse = await fetch("https://picsum.photos/v2/list?page=2&limit=12");
            const data = await repsonse.json();
            setPhotos(data);
            setPho(true)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    };

    const submitHandler = (e) =>{
        e.preventDefault();
        
        updatePass(passUpdate)
        
    
    };

    return (
        <>
            <div className="home-content">
                {!pho &&<div className="home-options">
                    {!pho && <div><button className="button" type="submit"  onClick={fetchPhotos}>Get Photos</button></div>}
                    {!pho && <div><button className="button" type="submit"  onClick={deleteUser}>Delete User</button></div>}
                    {!pho && <div>
                        <form onClick={submitHandler}>
                            <div> <input type="text" className="button"  placeholder="Enter New Password"  onChange={(event) => setPass(event.target.value)}/> </div>
                            <div className="spacer"></div>
                            <div><button className="button" type="submit" >Update Password</button></div>
                                </form>
                    </div>}
                </div>}
                {photos.map((item, index) => <PhotoContainer photo={item} key={index} />)}
            </div>
        </>
    )
};