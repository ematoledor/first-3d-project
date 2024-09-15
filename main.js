import { Theater } from 'lucide-react';
import * as THREE from 'three';
import { VK_FORMAT_ASTC_10x10_SFLOAT_BLOCK_EXT } from 'three/examples/jsm/libs/ktx-parse.module.js';
import emissivemap_fragmentGlsl from 'three/src/renderers/shaders/ShaderChunk/emissivemap_fragment.glsl.js';
import { color } from 'three/webgpu';

const canvas = document.getElementById('canvas');

// 1. Scene

const scene = new THREE.Scene();

scene.background = new THREE.Color('#F0F0F0');

// Camera
const camera = new THREE.PerspectiveCamera (75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Object
const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshLambertMaterial({color: '#468585', emissive: '#468585'});
const cube = new THREE.Mesh( geometry, material );
scene.add(cube);

// Add lightning
const light = new THREE.DirectionalLight(0x9CDBA6, 10);
light.position.set(1, 1, 1);
scene.add(light);

//Set renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


//Animate scene
function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x+= 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();