import "./App.css";
import Routess from "./routes";
import Marquee from "react-fast-marquee";

function App() {
  return (
    <div className="">
      <Routess />
      <div className="fixed z-[2000] bottom-0 w-full bg-[#fd1d1d]">
        <Marquee>
          <div className="flex items-center gap-4">
            <p className="w-full flex items-center h-[30px] text-white">
              🔥 Magmar currently works on
              <strong className="mx-1">Base Mainnet</strong>.
              <em>Coming soon to other chains...</em>
            </p>
            <p className="w-full flex items-center h-[30px] text-white">
              🔥 Magmar currently works on
              <strong className="mx-1">Base Mainnet</strong>.
              <em>Coming soon to other chains...</em>
            </p>
            <p className="w-full flex items-center h-[30px] text-white">
              🔥 Magmar currently works on
              <strong className="mx-1">Base Mainnet</strong>.
              <em>Coming soon to other chains...</em>
            </p>
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default App;
