import { useState, useRef } from 'react'
/* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './App.css'
import { Viewer, XKTLoaderPlugin } from "@xeokit/xeokit-sdk/dist/xeokit-sdk.es.js"
function App() {
 /*  const [count, setCount] = useState(0) */
  


 const viewer = new Viewer({
    canvasId: "v"
  })

  const xktLoader = new XKTLoaderPlugin(viewer)
  const node = xktLoader.load({
    id: 'theModel', 
    src: "./assets/glb/DamagedHelmet.textures.glb.xkt"
  })
  return (
    <>
      <canvas id="v" className="h-screen w-screen bg-sky-300/[.06]"></canvas>
    </>
  )
}

export default App
