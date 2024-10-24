import Navbar from "./components/Navbar";
import Events from "./components/Events";
import About from "./components/About";
import News from "./components/News";
import Footer from "./components/Footer";
import { StopIcon } from "@heroicons/react/24/solid";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="divider my-8 text-gray-400">
        <StopIcon className="size-8" />
        <StopIcon className="size-8" />
        <StopIcon className="size-8" />
      </div>
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
      <Footer />
    </>
  );
}

export default App;
