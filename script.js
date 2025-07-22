let oven = null;
const loader = new THREE.GLTFLoader();
const scene = document.querySelector('a-scene').object3D;

// expose functions globally for inline onclick handlers
window.loadOven = function loadOven(name) {
  console.log("Loading oven:", name);
 // allow callers to omit the .glb extension
  const file = name.endsWith('.glb') ? name : `${name}.glb`;
   // load the GLB from the local models directory
  loader.load(
     `./models/${file}`,
     function (gltf) {
      console.log("✅ Model loaded:", name);
      if (oven) {
        scene.remove(oven);
        oven.traverse((obj) => {
          if (obj.material) obj.material.dispose();
          if (obj.geometry) obj.geometry.dispose();
        });
      }
      oven = gltf.scene;
      oven.scale.set(1, 1, 1);
      oven.position.set(0, 0, -1);
      scene.add(oven);
    },
    undefined,
    function (error) {
      console.error("❌ GLB load error:", error);
    }
  );
};

window.changeOvenColor = function changeOvenColor(colorHex) {
  if (!oven) return;
  oven.traverse((node) => {
    if (node.isMesh && node.material) {
      node.material.color.set(colorHex);
      node.material.needsUpdate = true;
    }
  });
};
