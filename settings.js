
// Wait for page to load
window.onload = function() {
  loadSettingsData();
};

// Main function to load all settings
function loadSettingsData() {
  // Fetch the JSON file
  fetch('settings.json')
    .then(response => response.json())
    .then(data => {
      // Load each section
      loadProfileFields(data.profileFields);
      loadLanguages(data.preferences.languages);
      loadTimezones(data.preferences.timezones);
      loadAppSettings(data.appSettings);
    })
    .catch(error => {
      console.error('Error loading settings:', error);
    });
}

// Function 1: Load Profile Form Fields
function loadProfileFields(fields) {
  const form = document.querySelector('.form');
  let formHTML = '';

  for (let i = 0; i < fields.length; i++) {
    formHTML += `
      <div class="form-row">
        <label class="label" for="${fields[i].id}">${fields[i].label}</label>
        <input 
          id="${fields[i].id}" 
          name="${fields[i].id}" 
          type="${fields[i].type}" 
          class="input" 
          placeholder="${fields[i].placeholder}"
          value="${fields[i].value}" 
        />
      </div>
    `;
  }

  form.innerHTML = formHTML;
}

// Function 2: Load Language Options
function loadLanguages(languages) {
  const languageSelect = document.getElementById('language');
  let optionsHTML = '';

  for (let i = 0; i < languages.length; i++) {
    optionsHTML += `<option value="${languages[i].value}">${languages[i].label}</option>`;
  }

  languageSelect.innerHTML = optionsHTML;
}

// Function 3: Load Timezone Options
function loadTimezones(timezones) {
  const timezoneSelect = document.getElementById('timezone');
  let optionsHTML = '';

  for (let i = 0; i < timezones.length; i++) {
    optionsHTML += `<option value="${timezones[i].value}">${timezones[i].label}</option>`;
  }

  timezoneSelect.innerHTML = optionsHTML;
}

// Function 4: Load App Settings Toggles
function loadAppSettings(settings) {
  const appSettingsSection = document.querySelector('.section:last-child');
  let settingsHTML = '<h3 class="section-subtitle">App Settings</h3>';

  for (let i = 0; i < settings.length; i++) {
    const checkedAttr = settings[i].enabled ? 'checked' : '';
    settingsHTML += `
      <div class="setting-row">
        <div class="setting-text">
          <p class="setting-title">${settings[i].title}</p>
          <p class="setting-desc">${settings[i].description}</p>
        </div>
        <label class="toggle">
          <input type="checkbox" ${checkedAttr} />
          <span class="knob"></span>
        </label>
      </div>
    `;
  }

  settingsHTML += `
    <div class="actions">
      <button class="btn btn-primary" type="button">Save Changes</button>
    </div>
  `;

  appSettingsSection.innerHTML = settingsHTML;
}