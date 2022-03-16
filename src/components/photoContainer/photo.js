import './photo.css'

export const PhotoContainer = ({ photo }) => {
    return (
        <>
        <div className="photo-page">
            <div className="photo-container">
                <div className="photo-card">
                    <div className="border"><p>{photo.author}</p></div>
                    <div className="img-pos"><img src={photo.download_url} alt="lorem picsum random" /></div>
                </div>
            </div>
        </div>
        </>
    );
};