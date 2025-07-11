import {useState} from "react";
import Select from "react-select";
import roverCameras from "../../../backend/src/roverCameras.ts";
import SearchImages from "./SearchImages.tsx";

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

export default DropdownCameras;