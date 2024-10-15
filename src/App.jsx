import Navbar from "./components/Navbar";
import Events from "./components/Events";
import About from "./components/About";
import { StopIcon } from "@heroicons/react/24/solid";
import News from "./components/News";

function App() {
  return (
    <>
      <Navbar />
      <Events />
      <div className="divider my-8 text-gray-400">
        <StopIcon className="size-8" />
        <StopIcon className="size-8" />
        <StopIcon className="size-8" />
      </div>
      <About />
      <div className="divider my-8 text-gray-400">
        <StopIcon className="size-8" />
        <StopIcon className="size-8" />
        <StopIcon className="size-8" />
      </div>
      <News />
    </>
  );
}

export default App;
