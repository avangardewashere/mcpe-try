import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { World } from "./world";
import Stats from 'three/examples/jsm/libs/stats.module.js'


const stats = new Stats();



//renderer setup
const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);
renderer.setClearColor(0x80a0e0);

// Camera setup
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight
);

camera.position.set(-32, 16, -32);
camera.lookAt(0, 0, 0);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(16,0,16)
controls.update()
//Scene setup

const scene = new THREE.Scene();
const world = new World();
world.generate;
scene.add(world);
const geoemetry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({ color: 0x00d000 });
const cube = new THREE.Mesh(geoemetry, material);

scene.add(cube);

//adding the light
function setUpLights() {
  const light1 = new THREE.DirectionalLight();
  light1.position.set(1, 1, 1);
  scene.add(light1);

  const light2 = new THREE.DirectionalLight();
  light2.position.set(-1, 1, 0.5);
  scene.add(light2);

  const ambient = new THREE.AmbientLight();
  ambient.intensity = 0.1;
  scene.add(ambient);
}

//creating a world

// function setUpWorld(size) {
//   for (let x = 0; x < size; x++) {
//     for (let z = 0; z < size; z++) {
//       const cube = new THREE.Mesh(geoemetry, material);
//       cube.position.set(x, 0, z);
//       scene.add(cube);
//     }
//   }
// }

//render loop

function animate() {
  requestAnimationFrame(animate);

  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

setUpLights();
// setUpWorld(32);
animate();
