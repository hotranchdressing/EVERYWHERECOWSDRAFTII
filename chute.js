// chute.js
let chuteCompleted = false;

function startChuteExperience() {
  if (chuteCompleted) return; // prevents rerunning
  console.log("Starting chute walkthrough...");

  chuteCompleted = true;
  const frameCount = 51;
  let pan = 0;
  let currentFrame = 1;

  const chuteScene = document.getElementById("chute-scene");
  chuteScene.style.display = "block";
  chuteScene.style.position = "fixed";
  chuteScene.style.top = 0;
  chuteScene.style.left = 0;
  chuteScene.style.width = "100vw";
  chuteScene.style.height = "100vh";
  chuteScene.style.backgroundSize = "cover";
  chuteScene.style.backgroundPosition = "center";
  chuteScene.style.backgroundColor = "black";
  chuteScene.style.transition = "background-image 0.1s linear";

  // Preload images
  const images = [];
  for (let i = 1; i <= frameCount; i++) {
    const img = new Image();
    img.src = `images/chute_frames/frame${String(i).padStart(3, '0')}.png`;
    images.push(img);
  }

 // Function to update background frame
function updateFrame() {
  const frameNumber = String(currentFrame).padStart(3, '0');
  chuteScene.style.backgroundImage = `url('images/chute_frames/frame${frameNumber}.png')`;
  chuteScene.style.backgroundPosition = `${pan}px center`;

  if (currentFrame === frameCount) {
    // fade out chute
    chuteScene.style.transition = "opacity 3s ease";
    chuteScene.style.opacity = 0;

      // CHANGED: Navigate to home.html after chute fades
      setTimeout(() => {
        window.location.href = "home.html"; // Navigate to home page
      }, 3000); // Wait for fade to complete
    } else {
      chuteScene.style.opacity = 1;
    }
  }

  // Initialize first frame
  updateFrame();

  // --- KEYBOARD CONTROL ---
  document.addEventListener("keydown", (e) => {
    // move forward on any key
    if (currentFrame < frameCount) {
      currentFrame++;
      updateFrame();
    }

    // allow natural left/right scrolling for parallax effect
    if (e.key === "ArrowLeft") {
      pan -= 100; // adjust this for scroll distance
    } else if (e.key === "ArrowRight") {
      pan += 100;
    }
  });
}
