import { Environment, ScrollControls } from "@react-three/drei";
import "./Styles.css";
import { Canvas } from "@react-three/fiber";
import MacContainer from "./Components/MacComponents";

const App = () => {
  return (
    <div className="w-full h-screen font-['Helvetica_Now_Display']">
      <div className="nav-bar absolute line pt-10 pb-3 flex gap-10 py-10 top-0 left-1/2 -translate-x-1/2">
        {[
          { name: "Store", link: "https://www.apple.com/store" },
          { name: "iPhone", link: "#" },
          { name: "Mac", link: "#" },
          { name: "iPad", link: "#" },
          { name: "Watch", link: "#" },
          { name: "Vision", link: "#" },
          { name: "AirPods", link: "#" },
          { name: "TV&Home", link: "#" },
          { name: "Entertainment", link: "#" },
          { name: "Accessories", link: "#" },
          { name: "Support", link: "#" },
        ].map((item, index) => (
          <a
            href={item.link}
            key={index}
            className="text-white text-[400] text-sm capitalize"
            target={item.link !== "#" ? "_blank" : "_self"}
          >
            {item.name}
          </a>
        ))}
      </div>

      <div className="absolute  flex flex-col items-center text-white top-32 left-1/2 -translate-x-1/2 font-Helvetica">
        <h2 className="masked text-7xl tracking-tighter font-[700] mb-5">
          macbook Pro
        </h2>
        <h5>Oh so pro</h5>
        <br />
        <p className="text-center w-3/4">If you can dream it, Mac can do it.</p>
      </div>

      <Canvas camera={{ fov: 14, position: [0, -10, 220] }}>
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/studio_small_09_2k.hdr",
          ]}
        />

        <ScrollControls>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;
