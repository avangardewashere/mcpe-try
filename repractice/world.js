import * as THREE from "three";
const geoemetry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({ color: 0x00d000 });
export class World extends THREE.Group {
    constructor(size = { width: 32, height: 16 }) {
        super();
        this.size = size;
      }
}