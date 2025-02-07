import * as THREE from "three";

const geoemetry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({ color: 0x00d000 });
// const cube = new THREE.Mesh(geoemetry, material);

export class World extends THREE.Group {
  constructor(size = { width: 64, height: 2 }) {
    super();
    this.size = size;
  }

  generate() {
    const maxCount = this.size.width * this.size.width * this.size.height;
    const mesh = new THREE.InstancedMesh(geoemetry, material, maxCount);

    const matrix = new THREE.Matrix4();

    mesh.count = 0;
    for (let x = 0; x < this.size; x++) {
      for (let y = 0; y < this.size.height; y++) {
        for (let z = 0; z < this.size; z++) {
          //     const block = new THREE.Mesh(geoemetry, material);
          // block.position.set(x, y, z);
          // this.add(block);
          matrix.setPosition(x + 0.5, y + 0.5, z + 0.5);
          mesh.setMatrixAt(mesh.count++, matrix);
        }
      }
    }
    this.add(mesh);
  }
}
