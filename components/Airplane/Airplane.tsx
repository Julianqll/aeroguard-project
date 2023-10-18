import React, { useRef, useState } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const PART_COLORS = ['red', 'blue', 'green', 'yellow', 'purple'];

const Airplane: React.FC<{ colors?: { [materialName: string]: string } }> = ({ colors }) => {
  const gltf = useLoader(GLTFLoader, '/3DModels/low-poly_airplane.glb');

  // Rotación inicial del avión
  gltf.scene.rotation.set(0, Math.PI / 4, 0);

  // Agrupar y colorear partes basadas en normales
  gltf.scene.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      const geometry = child.geometry;
      geometry.computeVertexNormals();

      // Agrupar vértices por sus normales
      const groups: { [key: string]: number[] } = {};
      for (let i = 0; i < geometry.attributes.normal.array.length; i += 3) {
        const x = geometry.attributes.normal.array[i];
        const y = geometry.attributes.normal.array[i + 1];
        const z = geometry.attributes.normal.array[i + 2];
    
        const key = x.toFixed(2) + "-" + y.toFixed(2) + "-" + z.toFixed(2);
        if (!groups[key]) groups[key] = [];
        groups[key].push(i / 3);  // Aquí divido por 3 porque cada normal tiene 3 componentes
    }
    

      // Asignar colores a grupos de vértices
      const colors = new THREE.Color();
      geometry.setAttribute('color', new THREE.BufferAttribute(new Float32Array(geometry.attributes.position.count * 3), 3));
      const colorAttribute = geometry.attributes.color;
      Object.values(groups).forEach((indices, groupIndex) => {
        const color = new THREE.Color(PART_COLORS[groupIndex % PART_COLORS.length]);
        indices.forEach(index => {
          colors.set(color);
          colorAttribute.setXYZ(index, colors.r, colors.g, colors.b);
        });
      });
      child.material.vertexColors = true;
    }
  });
  return (
    <primitive object={gltf.scene} position={[0, 0, 0]} />
  );
};

const Scene: React.FC = () => {
  const controlsRef = useRef(null);
  
  // Ejemplo de colores para diferentes materiales (ajusta los nombres de los materiales según tu modelo)
  const [materialColors, setMaterialColors] = useState<{ [materialName: string]: string }>({
    'Material1': 'red', // Ejemplo, reemplaza 'Material1' con el nombre real del material
    'Material2': 'blue' // Ejemplo, reemplaza 'Material2' con el nombre real del material
  });

  return (
    <div>
      <Canvas style={{ height: '500px', overflow: 'hidden' }}>
        <perspectiveCamera position={[0, 0, 5]} />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Airplane colors={materialColors} />
        <OrbitControls ref={controlsRef} minDistance={100} maxDistance={100} />
      </Canvas>
      {/* Puedes agregar botones o controles para cambiar los colores de los materiales aquí */}
    </div>
  );
};

export default Scene;
