import {useEffect, useState} from "react";
import axios from "axios";
import Select from "react-select";
import DropdownCameras from "./DropdownCameras.tsx";

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

export default DropdownRovers;