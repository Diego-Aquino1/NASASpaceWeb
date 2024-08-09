import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Planet3D from './Planet3D';

const planets = [
    { name: 'Mercurio', texture: '/textures/mercury.jpg', position: [-6, 0, 0], size: 0.5, description: 'Mercurio es el planeta más cercano al Sol. Es el más pequeño del sistema solar y no tiene lunas.' },
    { name: 'Venus', texture: '/textures/venus.jpg', position: [-4, 0, 0], size: 0.9, description: 'Venus es el segundo planeta desde el Sol y es similar en tamaño a la Tierra. Es conocido por su atmósfera densa y temperaturas extremas.' },
    { name: 'Tierra', texture: '/textures/earth.jpg', position: [-2, 0, 0], size: 1, description: 'La Tierra es nuestro hogar, el tercer planeta desde el Sol y el único conocido que alberga vida.' },
    { name: 'Marte', texture: '/textures/mars.jpg', position: [0, 0, 0], size: 0.7, description: 'Marte es conocido como el planeta rojo debido a su superficie rica en óxido de hierro. Tiene dos lunas, Fobos y Deimos.' },
    { name: 'Júpiter', texture: '/textures/jupiter.jpg', position: [3, 0, 0], size: 1.8, description: 'Júpiter es el planeta más grande del sistema solar, conocido por sus bandas de nubes y la Gran Mancha Roja, una tormenta gigante.' },
    { name: 'Saturno', texture: '/textures/saturn.jpg', position: [7, 0, 0], size: 1.6, description: 'Saturno es famoso por sus anillos espectaculares. Es el segundo planeta más grande del sistema solar.' },
    { name: 'Urano', texture: '/textures/uranus.jpg', position: [10, 0, 0], size: 1.2, description: 'Urano es un gigante de hielo conocido por su inclinación axial extrema, lo que hace que "ruede" en su órbita alrededor del Sol.' },
    { name: 'Neptuno', texture: '/textures/neptune.jpg', position: [13, 0, 0], size: 1.1, description: 'Neptuno es el planeta más alejado del Sol. Es un gigante de hielo conocido por sus vientos extremadamente rápidos.' },
  ];

function SolarSystem() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const handleClick = (planetName) => {
    setSelectedPlanet(planetName);
  };

  const handleClose = () => {
    setSelectedPlanet(null);
  };

  return (
    <div>
      <Canvas style={{ height: '80vh', background: 'black' }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars />

        {planets.map((planet, index) => (
          <Planet3D
            key={index}
            texture={planet.texture}
            position={planet.position}
            size={planet.size}
            onClick={() => setSelectedPlanet(planet)}
          />
        ))}

        <OrbitControls enableZoom={true} />
      </Canvas>
      
      {selectedPlanet && (
        <div style={{ padding: '20px', backgroundColor: 'white', textAlign: 'center' }}>
          <h2>{selectedPlanet.name}</h2>
          <p>{selectedPlanet.description}</p>
        </div>
      )}
    </div>
  );
}

export default SolarSystem;
