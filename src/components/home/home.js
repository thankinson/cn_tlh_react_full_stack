import { useState } from "react";
import { exterminateUser, updatePass } from "../../utils";
import { PhotoContainer } from "../photoContainer/photo";
import "./home.css"

export const Home = (user) => {
    const [photos, setPhotos] = useState([]);
    const [pho, setPho] = useState(false)
    const [passUpdate, setPass] = useState()

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
        updatePass(user, passUpdate)
    };

    return (
        <>
            <div className="home-content">
                {!pho && <div><button className="button" onClick={fetchPhotos}>Get Photos</button></div>}
                {!pho && <div><button className="button" onClick={exterminateUser}>Delete User</button></div>}
                {!pho && <div>
                            <form onClick={submitHandler}>
                            <input type="text" placeholder="Enter New Password"  onChange={(event) => setPass(event.target.value)}/>
                            </form>
                </div>}
                {photos.map((item, index) => <PhotoContainer photo={item} key={index} />)}
            </div>
        </>
    )
};