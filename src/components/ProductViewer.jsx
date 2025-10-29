import React from "react";
import useMacbookStore from "../store/store";
import { clsx } from "clsx";
import { Canvas } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";
import MacbookModel14 from "./models/Macbook-14";
import StudioLights from "./three/StudioLights";
import ModelsSwitcher from "./three/ModelsSwitcher";
import { useMediaQuery } from "react-responsive";

const ProductViewer = () => {
  const { color, scale, setColor, setScale } = useMacbookStore();

  const isMobile = useMediaQuery({ query: " (max-width :1024px) " });
  return (
    <section id="product-viewer">
      <h2>Take a closer Look.</h2>

      <div className="controls">
        <p className="info">
          {" "}
          
        </p>
        <div className="flex-center gap-5 mt-5">
          <div className="color-control">
            <div
              onClick={() => setColor("#dde0df")}
              className={clsx(
                "bg-neutral-300",
                color === "#abd5bd" && "active"
              )}
            ></div>
            <div
              onClick={() => setColor("#2e2c2e")}
              className={clsx(
                "bg-neutral-900",
                color === "#2e2c2e" && "active"
              )}
            ></div>
          </div>
          <div className="size-control">
            <div
              onClick={() => setScale(0.06)}
              className={clsx(
                scale === 0.06 ? "big-white text-black" : "bg-transparent"
              )}
            >
              <p>14"</p>
            </div>
            <div
              onClick={() => setScale(0.08)}
              className={clsx(
                scale === 0.08 ? "big-white text-black" : "bg-transparent"
              )}
            >
              <p>16"</p>
            </div>
          </div>
        </div>
      </div>
      <Canvas
        id="canvas"
        camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
      >
        <StudioLights />
        <ModelsSwitcher scale={isMobile ? scale - 0.03 : scale} />
      </Canvas>
    </section>
  );
};

export default ProductViewer;
