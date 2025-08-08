"use client";

import React, { useRef, useState, useEffect } from "react";
import * as THREE from "three";

// Custom CSS styles
const styles = `
  .tech-sphere-container {
    width: 400px;
    height: 400px;
    background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
    overflow: hidden;
    position: relative;
 
  }
 
  .tech-sphere-container::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #ff6b6b, transparent);
    z-index: 5;
  }
  .component-title {
    position: absolute;
    top: 20px;
    left: 20px;
    color: #00d4ff;
    font-weight: bold;
    font-size: 18px;
    z-index: 10;
    text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
    font-family: 'Courier New', monospace;
  }
  .tech-info {
    position: absolute;
    bottom: 20px;
    right: 20px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 12px;
    z-index: 10;
    font-family: 'Courier New', monospace;
  }
  .glow-effect {
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #00d4ff, #ff6b6b, #4ecdc4, #45b7d1);
    border-radius: 22px;
    opacity: 0.3;
    animation: glowPulse 3s ease-in-out infinite;
    z-index: -1;
  }
  @keyframes glowPulse {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(1.02); }
  }
`;

const EnhancedSphere = () => {
  const canvasRef = useRef(null);
  const sphereRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    // Set hasMounted to true on the client side
    setHasMounted(true);
  }, []);

  useEffect(() => {
    // Only run Three.js code when the component has mounted
    if (!hasMounted || !canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 400 / 400, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });

    renderer.setSize(400, 400);
    renderer.setClearColor(0x000000, 1);

    // Custom vertex shader
    const vertexShader = `
      uniform float uTime;
      uniform vec2 uMouse;
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        vPosition = position;
        vNormal = normal;
        vec3 pos = position;
        float noise = sin(pos.x * 10.0 + uTime) * sin(pos.y * 10.0 + uTime) * sin(pos.z * 10.0 + uTime);
        pos += normal * noise * 0.05;
        vec3 mouseDirection = normalize(vec3(uMouse.x, -uMouse.y, 0.5) - normalize(position));
        float mouseProximity = 1.0 - smoothstep(0.5, 1.5, length(vec2(uMouse.x, -uMouse.y) - vec2(position.x / 2.0, position.y / 2.0)));
        pos += vNormal * mouseProximity * 0.1;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `;

    // Custom fragment shader
    const fragmentShader = `
      uniform float uTime;
      uniform vec2 uMouse;
      uniform vec3 uColor1;
      uniform vec3 uColor2;
      uniform vec3 uColor3;
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec2 vUv;
      void main() {
        vec3 color = uColor1;
        float pattern1 = sin(vPosition.x * 8.0 + uTime * 2.0) * sin(vPosition.y * 8.0 + uTime * 1.5);
        float pattern2 = cos(vPosition.z * 6.0 + uTime * 3.0) * cos(vPosition.x * 4.0 + uTime);
        color = mix(color, uColor2, pattern1 * 0.5 + 0.5);
        color = mix(color, uColor3, pattern2 * 0.3 + 0.3);
        vec3 viewDirection = normalize(cameraPosition - vPosition);
        float fresnel = 1.0 - dot(vNormal, viewDirection);
        fresnel = pow(fresnel, 2.0);
        color += fresnel * 0.5;
        float edge = 1.0 - dot(vNormal, viewDirection);
        edge = smoothstep(0.0, 1.0, edge);
        color += edge * vec3(0.0, 0.8, 1.0) * 0.3;
        float mouseProximity = 1.0 - smoothstep(0.3, 1.0, length(vec2(uMouse.x, -uMouse.y) - vec2(vPosition.x / 2.0, vPosition.y / 2.0)));
        color += vec3(1.0, 0.4, 0.8) * mouseProximity * 0.2;
        gl_FragColor = vec4(color, 0.9);
      }
    `;

    // Create shader material
    const shaderMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uColor1: { value: new THREE.Color(0x00d4ff) },
        uColor2: { value: new THREE.Color(0xff6b6b) },
        uColor3: { value: new THREE.Color(0x4ecdc4) },
      },
      transparent: true,
      wireframe: false,
    });

    // Main sphere with custom shader (increased detail for smoothness)
    const geometry = new THREE.IcosahedronGeometry(1.5, 8);
    const sphere = new THREE.Mesh(geometry, shaderMaterial);
    scene.add(sphere);

    // Dodecahedron inside the sphere for a complex inner structure
    const dodecahedronGeometry = new THREE.DodecahedronGeometry(0.5, 0);
    const dodecahedronMaterial = new THREE.MeshBasicMaterial({
      color: 0xffa500,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const dodecahedron = new THREE.Mesh(
      dodecahedronGeometry,
      dodecahedronMaterial
    );
    scene.add(dodecahedron);

    // Torus Knot to replace the simple rings
    const torusKnotGeometry = new THREE.TorusKnotGeometry(2.5, 0.1, 150, 16);
    const torusKnotMaterial = new THREE.MeshBasicMaterial({
      color: 0x4ecdc4,
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending,
    });
    const torusKnot = new THREE.Mesh(torusKnotGeometry, torusKnotMaterial);
    scene.add(torusKnot);

    // Particle system shader
    const particleVertexShader = `
      uniform float uTime;
      uniform float uSize;
      attribute float aScale;
      attribute vec3 aRandomness;
      void main() {
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        float angle = uTime * aRandomness.x;
        modelPosition.x += cos(angle) * aRandomness.y;
        modelPosition.z += sin(angle) * aRandomness.y;
        modelPosition.y += sin(uTime * aRandomness.z) * 0.5;
        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectionPosition = projectionMatrix * viewPosition;
        gl_Position = projectionPosition;
        gl_PointSize = uSize * aScale * (1.0 / -viewPosition.z);
      }
    `;

    const particleFragmentShader = `
      uniform float uTime;
      void main() {
        float strength = distance(gl_PointCoord, vec2(0.5));
        strength = 1.0 - strength;
        strength = pow(strength, 3.0);
        vec3 color = mix(vec3(0.0, 0.8, 1.0), vec3(1.0, 0.4, 0.8), sin(uTime) * 0.5 + 0.5);
        gl_FragColor = vec4(color, strength * 0.8);
      }
    `;

    // Particle system
    const particleCount = 200;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);
    const randomness = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const radius = Math.random() * 4 + 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
      scales[i] = Math.random() * 0.5 + 0.5;
      randomness[i3] = (Math.random() - 0.5) * 2;
      randomness[i3 + 1] = Math.random() * 2 + 1;
      randomness[i3 + 2] = (Math.random() - 0.5) * 4;
    }
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particleGeometry.setAttribute(
      "aScale",
      new THREE.BufferAttribute(scales, 1)
    );
    particleGeometry.setAttribute(
      "aRandomness",
      new THREE.BufferAttribute(randomness, 3)
    );
    const particleMaterial = new THREE.ShaderMaterial({
      vertexShader: particleVertexShader,
      fragmentShader: particleFragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uSize: { value: 30 },
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthTest: false,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
    camera.position.z = 5;
    sphereRef.current = {
      sphere,
      dodecahedron,
      torusKnot,
      particles,
      shaderMaterial,
      particleMaterial,
    };
    // Mouse interaction event listener
    const handleMouseMove = (event) => {
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      // Update the mouse uniform in the shader material
      if (
        sphereRef.current &&
        sphereRef.current.shaderMaterial.uniforms.uMouse
      ) {
        sphereRef.current.shaderMaterial.uniforms.uMouse.value.set(
          mouseRef.current.x,
          mouseRef.current.y
        );
      }
    };
    canvasRef.current.addEventListener("mousemove", handleMouseMove);
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      const time = Date.now() * 0.001;
      if (sphereRef.current) {
        sphereRef.current.shaderMaterial.uniforms.uTime.value = time;
        sphereRef.current.sphere.rotation.y += 0.005;
        sphereRef.current.sphere.rotation.x += 0.002;
        sphereRef.current.dodecahedron.rotation.y -= 0.005;
        sphereRef.current.dodecahedron.rotation.x -= 0.003;
        sphereRef.current.dodecahedron.rotation.z += 0.004;
        sphereRef.current.torusKnot.rotation.z += 0.008;
        sphereRef.current.torusKnot.rotation.y += 0.005;
        sphereRef.current.particles.rotation.y += 0.001;
      }
      renderer.render(scene, camera);
    };
    animate();
    return () => {
      if (canvasRef.current) {
        canvasRef.current.removeEventListener("mousemove", handleMouseMove);
      }
      renderer.dispose();
    };
  }, [hasMounted]);
  if (!hasMounted) {
    return null;
  }
  return (
    <>
      <style>{styles}</style>
      <div className="tech-sphere-container">
        <div className="glow-effect"></div>

        <canvas ref={canvasRef} />
      </div>
    </>
  );
};

export default EnhancedSphere;
