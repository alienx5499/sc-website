'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface FloatingOrbProps {
  className?: string;
  size?: number;
  color?: string;
  intensity?: number;
}

export const FloatingOrb: React.FC<FloatingOrbProps> = ({
  className = 'w-full h-full',
  size = 1.2,
  color = '#F7931A',
  intensity = 0.6,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 200;
    const height = container.clientHeight || 200;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'low-power',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // Core orb - icosahedron for organic feel
    const geometry = new THREE.IcosahedronGeometry(size, 4);
    const material = new THREE.MeshStandardMaterial({
      color: new THREE.Color(color),
      emissive: new THREE.Color(color),
      emissiveIntensity: intensity,
      metalness: 0.3,
      roughness: 0.4,
      transparent: true,
      opacity: 0.85,
    });
    const orb = new THREE.Mesh(geometry, material);
    scene.add(orb);

    // Wireframe shell
    const wireGeometry = new THREE.IcosahedronGeometry(size * 1.15, 1);
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(color),
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const wireOrb = new THREE.Mesh(wireGeometry, wireMaterial);
    scene.add(wireOrb);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(
      new THREE.Color(color).getHex(),
      3,
      15
    );
    pointLight.position.set(2, 2, 3);
    scene.add(pointLight);

    const backLight = new THREE.PointLight(0xffffff, 1, 10);
    backLight.position.set(-3, -1, -2);
    scene.add(backLight);

    // Animation
    const clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      orb.rotation.y = elapsed * 0.3;
      orb.rotation.x = Math.sin(elapsed * 0.5) * 0.15;
      orb.position.y = Math.sin(elapsed * 0.8) * 0.15;

      wireOrb.rotation.y = -elapsed * 0.15;
      wireOrb.rotation.x = Math.cos(elapsed * 0.3) * 0.2;
      wireOrb.rotation.z = Math.sin(elapsed * 0.4) * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    // Resize
    const resizeObserver = new ResizeObserver(() => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w > 0 && h > 0) {
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }
    });
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      wireGeometry.dispose();
      wireMaterial.dispose();
      renderer.dispose();
    };
  }, [size, color, intensity]);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none select-none ${className}`}
    />
  );
};
