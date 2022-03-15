import { useState } from "react";
import { PhotoContainer } from "../photoContainer/photo";

export const Home = () => {
    const [photos, setPhotos] = useState([]);

    const fetchPhotos = async () => {
        try {
            const repsonse = await fetch("https://picsum.photos/v2/list");
            const data = await repsonse.json();
            setPhotos(data);
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <>
            <button onClick={fetchPhotos}>Get Photos</button>
            {photos.map((item, index) => <PhotoContainer photo={item} key={index} />)}
        </>
    )
}