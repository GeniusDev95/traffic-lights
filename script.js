let currentLight = 0; // 0: Red, 1: Yellow, 2: Green
const lights = document.querySelectorAll('.light');
const smLights = document.querySelectorAll('.light-sm');
const nextButton = document.getElementById('next-btn');

function updateLights() {
    lights.forEach((light, index) => {
        if (index === currentLight) {
            light.classList.add('active');
        } else {
            light.classList.remove('active');
        }
    });
}
function updateSmLights() {
    smLights.forEach((smLight, index) => {
        if (index === currentLight) {
            smLight.classList.add('active');
        } else {
            smLight.classList.remove('active');
        }
    });
}

nextButton.addEventListener('click', () => {
    currentLight = (currentLight + 1) % lights.length; // Cycle through lights
    updateLights();
    updateSmLights();
});

// Initialize the lights when the page loads
    updateSmLights();
    updateLights();
    console.log(smLights);
    console.log(lights);

