"use client";

import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Icosahedron } from "@react-three/drei";
import * as THREE from "three";

function LiquidBlob() {
  const meshRef = useRef<THREE.Mesh>(null);
  const scrollProgress = useRef(0);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const handleScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress.current = max > 0 ? window.scrollY / max : 0;
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((_state, delta) => {
    const mesh = meshRef.current;
    if (!mesh || reducedMotion.current) return;

    const p = scrollProgress.current;

    // continuous idle rotation
    mesh.rotation.x += delta * 0.08;
    mesh.rotation.y += delta * 0.14;

    // scroll-driven tilt and drift
    mesh.rotation.z = THREE.MathUtils.lerp(mesh.rotation.z, p * Math.PI * 0.6, 0.05);
    mesh.position.y = THREE.MathUtils.lerp(mesh.position.y, 1.4 - p * 3.2, 0.04);
    mesh.position.x = THREE.MathUtils.lerp(mesh.position.x, Math.sin(p * Math.PI) * 1.2, 0.04);

    const scale = 1 + Math.sin(p * Math.PI) * 0.15;
    mesh.scale.setScalar(scale);
  });

  return (
    <Icosahedron ref={meshRef} args={[1.7, 14]} position={[0, 1.4, 0]}>
      <MeshDistortMaterial
        color="#7ff0e0"
        distort={0.45}
        speed={2}
        roughness={0.1}
        metalness={0.65}
        transparent
        opacity={0.5}
      />
    </Icosahedron>
  );
}

export default function Scene3D() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[1]" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 3, 3]} intensity={1.2} color="#9b7bff" />
        <pointLight position={[-3, -2, 2]} intensity={0.9} color="#ff9466" />
        <LiquidBlob />
      </Canvas>
    </div>
  );
}