import { useState } from "react";
import { PhotoContainer } from "../photoContainer/photo";
import "./home.css"

export const Home = () => {
    const [photos, setPhotos] = useState([]);
    const [pho, setPho] = useState(false)

    const fetchPhotos = async () => {
        try {
            const repsonse = await fetch("https://picsum.photos/v2/list?page=2&limit=30");
            const data = await repsonse.json();
            setPhotos(data);
            setPho(true)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <>
            <div className="home-content">
                {!pho && <div><button className="button" onClick={fetchPhotos}>Get Photos</button></div>}
                {photos.map((item, index) => <PhotoContainer photo={item} key={index} />)}
            </div>
        </>
    )
};