import './App.css'
import DropdownRovers from "./components/DropdownRovers.tsx";

function App() {

  return (
    <>
      <div>
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg"
            alt="NASA Logo"
        ></img>
      </div>
      <h1>Welcome to NASA!</h1>

        <div className="dropdownRover">
            <DropdownRovers />
        </div>
    </>
  )
}

// @ts-ignore
export default App;
