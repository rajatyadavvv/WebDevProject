// Wait for page to load
window.onload = function() {
  loadDevicesData();
};

// Main function to load devices data
function loadDevicesData() {
  // Fetch the JSON file
  fetch('newdevices.json')
    .then(response => response.json())
    .then(data => {
      // Load devices cards
      loadDevices(data.devices);
      // Load purchase buttons
      loadPurchaseOptions(data.purchaseOptions);
    })
    .catch(error => {
      console.error('Error loading devices:', error);
    });
}

// Function 1: Load Device Cards
function loadDevices(devices) {
  // Find the container where we'll add cards (after the subtitle)
  const subtitle = document.querySelector('.section-subtitle');
  const container = subtitle.parentElement;
  
  // Remove existing cards
  const existingCards = container.querySelectorAll('.card');
  for (let i = 0; i < existingCards.length; i++) {
    existingCards[i].remove();
  }
  
  // Create new cards from JSON
  for (let i = 0; i < devices.length; i++) {
    const device = devices[i];
    
    // Create card HTML
    const cardHTML = `
      <div class="card">
        <div class="card-body">
          <div class="card-copy">
            <p class="card-title">${device.name}</p>
            <p class="card-desc">${device.description}</p>
            <a href="${device.link}" class="btn btn-neutral btn-sm">Learn More</a>
          </div>
          <div class="card-media ${device.imageClass}" aria-hidden="true"></div>
        </div>
      </div>
    `;
    
    // Insert card after subtitle
    subtitle.insertAdjacentHTML('afterend', cardHTML);
  }
}

// Function 2: Load Purchase Options Buttons
function loadPurchaseOptions(options) {
  const actionsRow = document.querySelector('.actions-row');
  let buttonsHTML = '';
  
  for (let i = 0; i < options.length; i++) {
    buttonsHTML += `<a href="${options[i].link}" class="btn ${options[i].style}">${options[i].text}</a>`;
  }
  
  actionsRow.innerHTML = buttonsHTML;
}