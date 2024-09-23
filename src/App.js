import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useFBX } from '@react-three/drei';
import './App.css';

function BenderModel() {
  const fbx = useFBX('bender.fbx'); // Path to your FBX model in the public folder
  return <primitive object={fbx} scale={0.02} />;
}

function App() {
  return (
    <div className="App">
      <h1>IdleDance</h1>

      <div className="canvas-container" style={{ height: '500px' }}>
        {/* Canvas for rendering the 3D scene */}
        <Canvas>
          {/* Controls to orbit around the model */}
          <OrbitControls enableZoom={true} />
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <directionalLight position={[-10, -10, -5]} intensity={1} />
          {/* Load and display the Bender model */}
          <BenderModel />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
