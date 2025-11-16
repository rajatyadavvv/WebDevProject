// Load JSON when page is ready
window.addEventListener("DOMContentLoaded", function () {
  loadDevicesData();
});

// Fetch JSON safely under Express
function loadDevicesData() {
  fetch('/data/newdevices.json')
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to load newdevices.json");
      }
      return response.json();
    })
    .then(data => {
      loadDevices(data.devices || []);
      loadPurchaseOptions(data.purchaseOptions || []);
    })
    .catch(error => {
      console.error("Error loading devices:", error);
    });
}

// Escape HTML special characters
function safe(text) {
  return String(text).replace(/[&<>"']/g, m => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[m]);
}

// Function 1: Load Device Cards
function loadDevices(devices) {
  const subtitle = document.querySelector('.section-subtitle');
  if (!subtitle) return; // page may not contain device section

  const container = subtitle.parentElement;
  if (!container) return;

  // Remove all existing device cards
  const existingCards = container.querySelectorAll('.card');
  existingCards.forEach(card => card.remove());

  // Insert new cards
  devices.forEach(device => {
    const cardHTML = `
      <div class="card">
        <div class="card-body">
          <div class="card-copy">
            <p class="card-title">${safe(device.name)}</p>
            <p class="card-desc">${safe(device.description)}</p>
            <a href="${safe(device.link || '#')}" class="btn btn-neutral btn-sm">Learn More</a>
          </div>
          <div class="card-media ${safe(device.imageClass || '')}" aria-hidden="true"></div>
        </div>
      </div>
    `;
    subtitle.insertAdjacentHTML('afterend', cardHTML);
  });
}

// Function 2: Load Purchase Option Buttons
function loadPurchaseOptions(options) {
  const actionsRow = document.querySelector('.actions-row');
  if (!actionsRow) return;

  let buttonsHTML = "";

  options.forEach(opt => {
    buttonsHTML += `
      <a href="${safe(opt.link || '#')}" class="btn ${safe(opt.style || 'btn-neutral')}">
        ${safe(opt.text)}
      </a>
    `;
  });

  actionsRow.innerHTML = buttonsHTML;
}
