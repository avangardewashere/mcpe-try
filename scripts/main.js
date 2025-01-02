import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
//renderer setup
const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

// Camera setup
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight
);

camera.position.set(2, 2, 2);
camera.lookAt(0, 0, 0);


const controls = new OrbitControls(camera,renderer.domElement)

//Scene setup

const scene = new THREE.Scene();
const geoemetry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00d000 });
const cube = new THREE.Mesh(geoemetry, material);

scene.add(cube);

//render loop

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

window.addEventListener('resize',()=>{
  camera.aspect =window.innerWidth/window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})
animate();


