import * as THREE from "three";

const geoemetry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({ color: 0x00d000 });
// const cube = new THREE.Mesh(geoemetry, material);

export class World extends THREE.Group {
  constructor(size = { width: 64, height: 32 }) {
    super();
    this.size = size;
  }


}
