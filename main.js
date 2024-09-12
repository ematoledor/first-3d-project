import { Theater } from 'lucide-react';
import * as THREE from 'three';

const canvas:HTMLElement = document.getElementById( elementid: 'canvas');

// 1. Scene

const scene = new THREE.Scene();

scene.background = new THREE.Color( r: '#F0F0F0');

//Camera
const camera = new.THREE.PerspectiveCamera(fov:75, aspect:window.innerWidth / window.innerHeight, near:0.1, far: 1000);