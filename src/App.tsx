import "./App.css"
import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Model } from "./components/IcebergModel";
import { Overlay } from "./overlay";

function App() {
  const overlay = useRef<HTMLDivElement>(null);
  const caption = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const scroll = useRef({ current: 0 });

  return (
    <>
      <Canvas shadows 
      eventSource={document.getElementById('root')!} 
      eventPrefix="client">
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Model scroll={scroll}/>
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
      <Overlay ref={overlay} caption={caption} scroll={scroll} />
    </>
  );
}

export default App;