import { useState, useRef, useEffect } from "react";
/* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import "./App.css";
import {
  Viewer,
  XKTLoaderPlugin,
  Mesh,
  buildSphereGeometry,
  ReadableGeometry,
  MetallicMaterial,
  ReflectionMap,
  LightMap,
  PhongMaterial,
  Texture,
  DirLight,
  PointLight,
  sRGBEncoding,
} from "@xeokit/xeokit-sdk/dist/xeokit-sdk.es.js";
function App() {
  /*  const [count, setCount] = useState(0) */

  let viewer: any = null;

  useEffect(() => {
    loadViewer();
  }, []);

  function loadViewer() {
    viewer = new Viewer({
      canvasId: "v",
      transparent: true,
      colorTextureEnabled: true,
      pbrEnabled: true,
    });

    viewer.scene.clearLights();

    new DirLight(viewer.scene, {
      id: "keyLight",
      dir: [0.8, -0.6, -0.8],
      color: [1.0, 0.99, 0.99],
      intensity: 1.0,
      space: "view"
 });


    new ReflectionMap(viewer.scene, {
      src: [
          "/textures/reflect/Uffizi_Gallery/Uffizi_Gallery_Radiance_PX.png",
          "/textures/reflect/Uffizi_Gallery/Uffizi_Gallery_Radiance_NX.png",
          "/textures/reflect/Uffizi_Gallery/Uffizi_Gallery_Radiance_PY.png",
          "/textures/reflect/Uffizi_Gallery/Uffizi_Gallery_Radiance_NY.png",
          "/textures/reflect/Uffizi_Gallery/Uffizi_Gallery_Radiance_PZ.png",
          "/textures/reflect/Uffizi_Gallery/Uffizi_Gallery_Radiance_NZ.png"
      ], 
      encoding: sRGBEncoding
  });
   

    const xktLoader = new XKTLoaderPlugin(viewer);
    const node = xktLoader.load({
      id: "theModel",
      src: "/glb/DamagedHelmet.textures.glb.xkt",
    });

    console.log(viewer);

    node.on("loaded", () => {
      console.log("Model loaded");
    

      if (viewer) {
        viewer.cameraFlight.flyTo(node);
      }
    });
  }

  return (
    <>
      <canvas
        id="v"
        className="h-screen w-screen bg-sky-300/[.06] absolute overflow-hidden top-0 max-h-screen max-w-screen z-10"
      ></canvas>
    </>
  );
}

export default App;
