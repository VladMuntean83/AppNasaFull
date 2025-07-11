import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Select from 'react-select'
import axios from "axios";
import {  useEffect, useState } from "react";



function DropdownRovers() {

    //
    // const resp = await axios.get('http://localhost:8000/rovers');
    // console.log(resp.data);

     const [options, setOptions] = useState<{value: string, label: string}[]>([]);

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

    return(
        <Select options={options} />
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

        <div>
            <DropdownRovers />
        </div>
    </>
  )
}

// @ts-ignore
export default App;
