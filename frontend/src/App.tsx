import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Select from 'react-select'
import axios from "axios";
import {useEffect, useState} from "react";
import roverCameras from '../../backend/src/roverCameras.ts';

// let myOption: string;

function DropdownRovers() {

     const [options, setOptions] = useState<{value: string, label: string}[]>([]);
    const [selectedRover, setSelectedRover] = useState<string | null>(null);

    useEffect(() => {
        const fetchRovers = async () => {

            const resp = await axios.get('http://localhost:8000/rovers');

            localStorage.setItem('options', JSON.stringify(resp.data['rovers']));
        }

        if (options)
            fetchRovers();

        const storageContent = localStorage.getItem('options');
        setOptions(storageContent !== null ? JSON.parse(storageContent) : [] );
    }, []);

    return (
        <>
            <Select
                options={options}
                onChange={(option) => {
                    if (option) {
                        setSelectedRover(option.value);
                    }
                }}
            />

            <div className="dropdownCamera">
                <DropdownCameras selectedRover={selectedRover} />
            </div>
        </>
    );
}

function DropdownCameras({ selectedRover }: { selectedRover: string | null }) {

    const [selectedCamera, setSelectedCamera] = useState<string | null>(null);

    return(
        <>
            <Select
                options={selectedRover ? roverCameras[selectedRover] : []}
                onChange={(option) => {
                    if (option) {
                        setSelectedCamera(option.value);
                    }
                }}
            />

            <SearchImages selectedCamera={selectedCamera} selectedRover={selectedRover} />
        </>
    );
}

// @ts-ignore
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
                {images.map((imgUrl) => (
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

function App() {

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

        <div className="dropdownRover">
            <DropdownRovers />
        </div>
    </>
  )
}

// @ts-ignore
export default App;
