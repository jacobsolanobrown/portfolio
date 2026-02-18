'use client';

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { AsciiEffect } from 'three/addons/effects/AsciiEffect.js';

const ThreeScene: React.FC = () => {
  // We use a ref to attach our Three.js canvas to the DOM
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // get th einitial width and height of the container to set up our scene
    const width = containerRef.current.clientWidth || window.innerWidth;
    const height = containerRef.current.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();

    // use the right aspect ratio based on our container's size so it doesn't look stretched
    const aspect = width / height;
    const fov = 75; // how wide the camera's view is
    const near = 0.1; // how close things can be before they disappear
    const far = 1000; // how far things can be before they disappear
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 3.5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);

    // for macbooks to not look blurry
    renderer.setPixelRatio(window.devicePixelRatio);

    // append the canvas to our container div
    // containerRef.current.appendChild(renderer.domElement);

    // Create the ASCII effect
    const effect = new AsciiEffect(renderer, ' .:-=+*#%@', {
      invert: true, // Use true if your background is dark
      scale: 1, // Adjust the scale of the ASCII characters (0.5 means half the size of the original canvas)
    });

    effect.domElement.style.position = 'absolute';
    effect.domElement.style.top = '0';
    effect.domElement.style.left = '0';
    effect.domElement.style.width = '100%';
    effect.domElement.style.height = '100%';
    effect.domElement.style.color = 'white';
    effect.domElement.style.backgroundColor = 'none';
    effect.domElement.style.fontFamily = 'monospace';

    effect.setSize(width, height);
    // append the ASCII effect's DOM element (which is a div containing the ASCII art) to our container
    container.appendChild(effect.domElement);

    // set up the sphere geometry abd radius in scene units (camera is at z=3, so radius=1 fits perfectly in view)
    const sphereRadius = 1.5;
    const geometry = new THREE.SphereGeometry(sphereRadius, 32, 32);

    // set up the lighting (ambient so not as harsh)
    // const light = new THREE.DirectionalLight(0xffffff, 10);
    // light.position.set(-1, 2, 4);
    // scene.add(light);
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);
    ambientLight.intensity = 3; // down from 10

    // load the earth texture and create a material that uses it
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load('/another_earth.jpg');

    // create the sphere
    const material = new THREE.MeshPhongMaterial({
      map: earthTexture,
      shininess: 0, // reduce shininess to make it look more like a matte surface, which can help the ASCII effect show more detail
      specular: new THREE.Color(0x000000), // set specular color to black to eliminate highlights that can wash out details in the ASCII effect
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // create the animation lopp
    let frameId: number;
    const render = (time: number) => {
      // convert time to seconds and make it smaller so the rotation isn't too fast
      time *= 0.0005;
      // rotate the sphere based on the time
      // sphere.rotation.x = time;
      sphere.rotation.y = time;
      // render the scene from the perspective of the camera
      effect.render(scene, camera);
      // request the next frame to keep the animation going
      frameId = requestAnimationFrame(render);
    };
    // start the animation loop
    frameId = requestAnimationFrame(render);

    // // resizing handler to make sure our scene adjusts when the window size changes
    // const handleResize = () => {
    //   if (!containerRef.current) return;
    //   // get he new width and height of the container
    //   const newWidth = containerRef.current.clientWidth;
    //   const newHeight = containerRef.current.clientHeight;

    //   // update the camera's aspect ratio and projection matrix so the scene doesn't look stretched
    //   camera.aspect = newWidth / newHeight;
    //   camera.updateProjectionMatrix();

    //   // update the renderer's size to fill the new dimensions
    //   renderer.setSize(newWidth, newHeight);
    //   effect.setSize(newWidth, newHeight);
    // };

    // // listen for window resize events and call our handler
    // window.addEventListener('resize', handleResize);

    // ResizeObserver watches the container itself, not the window
    // so it responds correctly when the container changes size due to layout
    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      const newWidth = entry.contentRect.width;
      const newHeight = entry.contentRect.height;

      if (newWidth === 0 || newHeight === 0) return;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
      effect.setSize(newWidth, newHeight);
    });

    resizeObserver.observe(container);

    // cleanup function to remove event listeners and stop the animation when the component unmounts
    return () => {
      resizeObserver.disconnect();

      // window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      // remove the canvas from the DOM and dispose of the renderer to free up resources
      if (
        containerRef.current &&
        effect.domElement.parentNode === containerRef.current
      ) {
        containerRef.current.removeChild(effect.domElement);
      }
      // dispose all Three.js resources
      geometry.dispose();
      material.dispose();
      // effect.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      // className='w-full h-full block text-white font-mono justify-center items-center bg-none m-0 p-0'
      style={{ position: 'relative', width: '100%', height: '100%' }}
    />
  );
};

export default ThreeScene;
