import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Canvas } from '@react-three/fiber';
import { Model } from './components/IcebergModel';
import { OrbitControls } from '@react-three/drei';

function App() {
  return (
    <Parallax pages={2}>
      <ParallaxLayer offset={0} speed={0.5}>
        <Canvas 
          camera={{ 
            position: [5, 3, 8], 
            fov: 75 
          }}
          style={{ width: '100vw', height: '100vh' }}
        >
          {/* Essential lighting to see model colors */}
          <ambientLight intensity={0.4} />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={0.8}
            castShadow
          />
          <pointLight position={[-10, -10, -10]} intensity={0.3} />
          
          {/* Add controls to navigate around the model */}
          <OrbitControls 
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            target={[0, 0, 0]}
            minDistance={2}
            maxDistance={20}
          />
          
          <Model />
        </Canvas>
      </ParallaxLayer>

      
    </Parallax>
  );
}

export default App;