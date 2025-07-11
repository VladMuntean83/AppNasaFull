const roverCameras: Record<string, { value: string; label: string }[]> = {
    Curiosity: [
        { value: 'fhaz', label: 'fhaz' },
        { value: 'rhaz', label: 'rhaz' },
        { value: 'mast', label: 'mast' },
        { value: 'chemcam', label: 'chemcam' },
        { value: 'mahli', label: 'mahli' },
        { value: 'mardi', label: 'mardi' },
        { value: 'navcam', label: 'navcam' }
    ],
    Opportunity: [
        { value: 'fhaz', label: 'fhaz' },
        { value: 'rhaz', label: 'rhaz' },
        { value: 'navcam', label: 'navcam' },
        { value: 'pancam', label: 'pancam' },
        { value: 'minites', label: 'minites' }
    ],
    Spirit: [
        { value: 'fhaz', label: 'fhaz' },
        { value: 'rhaz', label: 'rhaz' },
        { value: 'navcam', label: 'navcam' },
        { value: 'pancam', label: 'pancam' },
        { value: 'minites', label: 'minites' }
    ],
    Perseverance: []
};
export default roverCameras;