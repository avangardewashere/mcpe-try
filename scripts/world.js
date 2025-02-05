import * as THREE from "three";

const geoemetry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({ color: 0x00d000 });
// const cube = new THREE.Mesh(geoemetry, material);

export class World extends THREE.Group {
  constructor(size = { width: 32, height: 16 }) {
    super();
    this.size = size;
  }

  generate() {
    for (let x = 0; x < this.size; x++) {
      for (let z = 0; z < this.size; z++) {
        const block = new THREE.Mesh(geoemetry, material);
        block.position.set(x, 0, z);
        this.add(block);
      }
    }
  }
}
