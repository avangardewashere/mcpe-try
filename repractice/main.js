import * as Three from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { World } from "../scripts/world";

//render seti
const renderer = new Three.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

//camera setup
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight
);

camera.position.set(-32, 16, -32);
camera.lookAt(0, 0, 0);

//controls

const controls = new OrbitControls(cameraFar, renderer.domElement);
controls.target.set(16, 0, 16);
controls.update();
