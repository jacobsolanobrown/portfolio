'use client';

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeScene: React.FC = () => {
  // We use a ref to attach our Three.js canvas to the DOM
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // get th einitial width and height of the container to set up our scene
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    
    // use the right aspect ratio based on our container's size so it doesn't look stretched
    const aspect = width / height;
    const fov = 75; // how wide the camera's view is
    const near = 0.1; // how close things can be before they disappear
    const far = 1000; // how far things can be before they disappear
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    
    // for macbooks to not look blurry
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // append the canvas to our container div
    containerRef.current.appendChild(renderer.domElement);

    // setting up cube geometry and a light so we can see it 
    const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const light = new THREE.DirectionalLight(0xffffff, 5);
    light.position.set(-1, 2, 4);
    scene.add(light);

    // make function to create cubes with different colors and positions
    function makeInstance(color: number, x: number) {
      const material = new THREE.MeshPhongMaterial({ color });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);
      cube.position.x = x;
      return cube;
    }

    const cubes = [
      makeInstance(0x44aa88, 0),
      makeInstance(0x8844aa, -1.2),
      makeInstance(0xaa8844, 1.2),
    ];

    // create the animation lopp
    let frameId: number;
    const render = (time: number) => {
      // convert time to seconds and make it smaller so the rotation isn't too fast
      time *= 0.001;
      // for each cube, rotate it based on the time and its index so they spin at different speeds
      cubes.forEach((cube, ndx) => {
        const speed = 1 + ndx * 0.1;
        const rot = time * speed;
        cube.rotation.x = rot;
        cube.rotation.y = rot;
      });
      // render the scene from the perspective of the camera
      renderer.render(scene, camera);
      // request the next frame to keep the animation going
      frameId = requestAnimationFrame(render);
    };
    // start the animation loop
    frameId = requestAnimationFrame(render);

    // resizing handler to make sure our scene adjusts when the window size changes
    const handleResize = () => {
      if (!containerRef.current) return;
      // get he new width and height of the container
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;

      // update the camera's aspect ratio and projection matrix so the scene doesn't look stretched
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      
      // update the renderer's size to fill the new dimensions
      renderer.setSize(newWidth, newHeight);
    };

    // listen for window resize events and call our handler
    window.addEventListener('resize', handleResize);

    // cleanup function to remove event listeners and stop the animation when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      // remove the canvas from the DOM and dispose of the renderer to free up resources
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-screen block m-0 p-0 overflow-hidden bg-black"
    />
  );
};

export default ThreeScene;