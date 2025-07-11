import {useState} from "react";
import axios from "axios";

function SearchImages({ selectedRover, selectedCamera }: { selectedRover: string | null, selectedCamera: string | null }) {
    const [images, setImages] = useState<string[]>([]);

    const fetchImages = async () => {
        if (!selectedRover || !selectedCamera) return;

        try {
            const resp = await axios.get(
                `http://localhost:8000/rovers/${selectedRover}/photos/${selectedCamera}`
            );

            // Get only the first 5
            const firstFive = resp.data.photos.slice(0, 5);
            setImages(firstFive);
        } catch (error) {
            console.error("Failed to fetch images:", error);
        }
    };

    return (
        <>
            <div>
                <button onClick={fetchImages}>Search</button>
            </div>
            <div>
                {images.slice(0, 5).map((imgUrl) => (
                    <img
                        className="imageGallery"
                        src={imgUrl}
                        alt='Mars rover'
                    />
                ))}
            </div>
        </>
    );
}

export default SearchImages;