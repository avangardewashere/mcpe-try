import { GUI } from "three/addons/libs/lil-gui.module.min.js";

export function createUI(world) {
  const gui = new GUI();

  gui.add(world.size, "width",8,128,1).name('width');
  gui.add(world.size, "width",4.,64,1).name('height')
  gui.add(world,'generate')
}
 