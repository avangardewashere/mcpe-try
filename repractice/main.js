import * as THREE from "three";
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


//scene setup
const scene = new THREE.scene();
const world= new World();

world.generate()
scene.add(world)

const geoemetry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({color:0x00d000});

const cube = new THREE.Mesh(geoemetry,material);
scene.add(cube);

function setUpLights(){
   const light1 = new THREE.DirectionalLight();
    light1.position.set(1, 1, 1);
    scene.add(light1);
}

function animate() {
    requestAnimationFrame(animate);

    renderer.renderer(scene,camera)
}


window.addEventListener("resize",()=>{
    camera.aspect = window.innerWidth /window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth,window.innerHeight);


})

setUpLights();

animate();



