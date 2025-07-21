let oven = null;
const loader = new THREE.GLTFLoader();
const scene = document.querySelector('a-scene').object3D;

function loadOven(name) {
  console.log("Loading oven:", name);
  const url = 'illustrious-syrniki-4e4a55.netlify.app/${name}.glb'; // <- Replace with your current Netlify site
  loader.load(
    url,
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
}

function changeOvenColor(colorHex) {
  if (!oven) return;
  oven.traverse((node) => {
    if (node.isMesh && node.material) {
      node.material.color.set(colorHex);
      node.material.needsUpdate = true;
    }
  });
}


function changeOvenColor(colorHex) {
  if (!oven) return;
  oven.traverse((node) => {
    if (node.isMesh && node.material) {
      node.material.color.set(colorHex);
      node.material.needsUpdate = true;
    }
  });
}


function changeOvenColor(colorHex) {
  if (!oven) return;
  oven.traverse((node) => {
    if (node.isMesh && node.material) {
      node.material.color.set(colorHex);
      node.material.needsUpdate = true;
    }
  });
}
colorHex ({
  if (!oven) return;
  oven.traverse((node) => {
    if (node.isMesh && node.material) {
      node.material.color.set(colorHex);
      node.material.needsUpdate = true;
    }
  });
}

