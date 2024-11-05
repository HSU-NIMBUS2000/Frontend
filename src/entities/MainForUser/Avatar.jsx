import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useSpring, a } from '@react-spring/three';
import styled from "styled-components";
import { ACESFilmicToneMapping, ColorManagement } from "three";

ColorManagement.legacyMode = false;

const Model = ({ avatar }) => {
  let scene;
  const [isInitial, setIsInitial] = useState(true); // 초기 상태 플래그

  try {
    const model = useGLTF(avatar);
    scene = model.scene;

    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  } catch (error) {
    console.error("Error loading model:", error);
  }

  const { positionY } = useSpring({
    from: {
      positionY: avatar.includes('doctor_simi') ? -13
        : avatar.includes('bunny_doctor') ? 4.5
          : avatar.includes('banana_cat') ? 0
            : 0
    },
    to: async (next) => {
      if (!isInitial) {
        while (true) {
          await next({
            positionY: avatar.includes('doctor_simi') ? -13.5
              : avatar.includes('bunny_doctor') ? 1.5
                : avatar.includes('banana_cat') ? -0.5
                  : 0
          });
          await next({
            positionY: avatar.includes('doctor_simi') ? -12.5
              : avatar.includes('bunny_doctor') ? 2.5
                : avatar.includes('banana_cat') ? 0
                  : 0
          });
        }
      }
    },
    config: { tension: 50, friction: 20, duration: 1500 },
    immediate: isInitial,
    reset: true,
  });

  useEffect(() => {
    setIsInitial(true);
    const timer = setTimeout(() => setIsInitial(false), 0); // 다음 렌더링에서 애니메이션 활성화
    return () => clearTimeout(timer);
  }, [avatar]);

  if (!scene) return null;

  const rotation = avatar.includes('doctor_simi')
    ? [0, -Math.PI/3, 0]
    : avatar.includes('bunny_doctor')
      ? [0, -Math.PI / -10, 0]
      : avatar.includes('banana_cat')
        ? [0, -Math.PI / -10, 0]
        : [0, 0, 0];

  const positionX = avatar.includes('banana_cat') ? -1.5
    : avatar.includes('bunny_doctor') ? -6
      : avatar.includes('doctor_simi') ? -3
        : 0;

  const positionZ = avatar.includes('banana_cat') ? 2
    : avatar.includes('bunny_doctor') ? -8
      : avatar.includes('doctor_simi') ? 0
        : 0;

  return (
    <a.primitive
      object={scene}
      scale={1}
      position-x={positionX}
      position-y={positionY}
      position-z={positionZ}
      rotation={rotation}
    />
  );
};

function Avatar({ avatar }) {
  return (
    <ModelWrap>
      <Canvas
        shadows
        style={{ background: 'linear-gradient(135deg, #FFDEAD, #FFD1DC, #E5CCDA)' }}
        gl={{ antialias: true }}
        onCreated={({ gl }) => {
          gl.toneMapping = ACESFilmicToneMapping;
        }}
      >
        <ambientLight intensity={0.9} color={"#FFD1DC"} />
        <directionalLight
          position={[2, 8, 15]}
          intensity={2.5}
          color={"#FFD0C3"}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <spotLight
          position={[10, 15, 10]}
          intensity={2}
          color="#FFB6C1"
          angle={0.4}
          penumbra={1}
          castShadow
        />
        <spotLight
          position={[0, -10, 10]}
          intensity={1.8}
          color="#FF69B4"
          angle={0.5}
          penumbra={0.7}
          castShadow
        />
        <pointLight
          position={[-10, 10, 0]}
          intensity={1.5}
          color="#FFD0C3"
          castShadow
        />
        <Model avatar={avatar} />
        <OrbitControls enablePan={false} />
      </Canvas>
    </ModelWrap>
  );
}

export default Avatar;

const ModelWrap = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;