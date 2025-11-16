// Run when page is ready
window.addEventListener("DOMContentLoaded", function () {
  loadSettingsData();
});

// Fetch JSON safely under Express
function loadSettingsData() {
  fetch('/data/settings.json')
    .then(response => {
      if (!response.ok) throw new Error("Failed to load settings.json");
      return response.json();
    })
    .then(data => {
      loadProfileFields(data.profileFields || []);
      loadLanguages((data.preferences && data.preferences.languages) || []);
      loadTimezones((data.preferences && data.preferences.timezones) || []);
      loadAppSettings(data.appSettings || []);
    })
    .catch(error => {
      console.error("Error loading settings:", error);
    });
}

// Escape HTML
function safe(str) {
  return String(str).replace(/[&<>"']/g, ch => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[ch]);
}

// -------------------------------------------------------
// 1) Load Profile Fields
// -------------------------------------------------------
function loadProfileFields(fields) {
  const form = document.querySelector(".form");
  if (!form) return;

  let formHTML = "";

  fields.forEach(f => {
    formHTML += `
      <div class="form-row">
        <label class="label" for="${safe(f.id)}">${safe(f.label)}</label>
        <input 
          id="${safe(f.id)}"
          name="${safe(f.id)}"
          type="${safe(f.type)}"
          class="input"
          placeholder="${safe(f.placeholder)}"
          value="${safe(f.value)}"
        />
      </div>
    `;
  });

  form.innerHTML = formHTML;
}

// -------------------------------------------------------
// 2) Load Language Options
// -------------------------------------------------------
function loadLanguages(languages) {
  const select = document.getElementById("language");
  if (!select) return;

  let optionsHTML = "";

  languages.forEach(lang => {
    optionsHTML += `<option value="${safe(lang.value)}">${safe(lang.label)}</option>`;
  });

  select.innerHTML = optionsHTML;
}

// -------------------------------------------------------
// 3) Load Timezones
// -------------------------------------------------------
function loadTimezones(timezones) {
  const select = document.getElementById("timezone");
  if (!select) return;

  let optionsHTML = "";

  timezones.forEach(tz => {
    optionsHTML += `<option value="${safe(tz.value)}">${safe(tz.label)}</option>`;
  });

  select.innerHTML = optionsHTML;
}

// -------------------------------------------------------
// 4) Load App Settings Section
// -------------------------------------------------------
function loadAppSettings(settings) {
  const section = document.getElementById("app-settings-section");
  if (!section) return;

  let settingsHTML = `
    <h3 class="section-subtitle">App Settings</h3>
  `;

  settings.forEach(s => {
    settingsHTML += `
      <div class="setting-row">
        <div class="setting-text">
          <p class="setting-title">${safe(s.title)}</p>
          <p class="setting-desc">${safe(s.description)}</p>
        </div>
        <label class="toggle">
          <input type="checkbox" ${s.enabled ? "checked" : ""} />
          <span class="knob"></span>
        </label>
      </div>
    `;
  });

  settingsHTML += `
    <div class="actions">
      <button class="btn btn-primary" type="button">Save Changes</button>
    </div>
  `;

  section.innerHTML = settingsHTML;
}
