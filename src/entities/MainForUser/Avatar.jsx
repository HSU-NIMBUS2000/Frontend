import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useSpring, a } from '@react-spring/three'; // react-spring의 애니메이션 사용
import styled from "styled-components";
import { ACESFilmicToneMapping, ColorManagement } from "three"; // sRGBEncoding 제거

// 최신 Color Management 설정
ColorManagement.legacyMode = false;

// 3D 모델 컴포넌트 정의
const Model = ({ avatar }) => {
  let scene;

  try {
    const model = useGLTF(avatar);
    scene = model.scene;

    // 재질 설정
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;  // 그림자 설정
        child.receiveShadow = true;  // 그림자 on off 설정
      }
    });
  } catch (error) {
    console.error("Error loading model:", error);
  }

  // `useSpring` 훅을 조건부 밖으로 이동
  const { positionY } = useSpring({
    //doctor_simi
    from: { positionY: -13.7 },
    to: async (next) => {
      while (true) {
        await next({ positionY: 3.3 }); // 위로
        await next({ positionY: 2.7 });   // 아래로
      }
    },
    config: { tension: 50, friction: 20, duration: 1500 },
    loop: true, // 무한 루프
  });

  // `scene`이 없을 때 null을 반환하는 로직
  if (!scene) return null;

  return (
    <a.primitive
      object={scene}
      scale={1}
      position-x={-2}
      position-y={positionY}
      position-z={-1}
      rotation={[0, -Math.PI / 3, 0]} // 살짝 오른쪽 보게 설정함
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
          gl.toneMapping = ACESFilmicToneMapping; // 톤 매핑 활성화
        }}
      >
        {/* 전체적인 부드러운 핑크 조명 */}
        <ambientLight intensity={0.9} color={"#FFD1DC"} />

        {/* 앞에서 비추는 분홍색 계열의 조명 */}
        <directionalLight
          position={[2, 8, 5]} // 모델 앞쪽에서 비추도록 설정
          intensity={2.5}
          color={"#FFD0C3"} // 부드러운 분홍색
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />

        {/* 모델의 테두리 */}
        <spotLight
          position={[10, 15, 10]}
          intensity={2}
          color="#FFB6C1"
          angle={0.4}
          penumbra={1} // 부드럽게
          castShadow
        />

        {/* 모델 아래에서 비추는 분홍색 스팟 조명 */}
        <spotLight
          position={[0, -10, 5]}
          intensity={1.8}
          color="#FF69B4" // 핫핑크 조명
          angle={0.5}
          penumbra={0.7}
          castShadow
        />

        {/* 모델 뒤에서 비추는 오렌지색 포인트 조명 */}
        <pointLight
          position={[-10, 10, -10]}
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
