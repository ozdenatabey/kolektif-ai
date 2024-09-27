import Navbar from "./components/Navbar";
import Events from "./components/Events";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col w-2/5 items-center mt-6">
        <button className="btn btn-neutral text-lg font-semibold">Test</button>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          obcaecati nihil reiciendis, et adipisci mollitia at, sequi veritatis
          nobis ea suscipit inventore unde quasi est quod repudiandae ducimus
          odio? Ab?
        </p>
      </div>
      <Events />
    </>
  );
}

export default App;
