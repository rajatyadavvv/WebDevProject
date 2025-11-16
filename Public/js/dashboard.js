// Utility to escape HTML
function safe(text) {
  return String(text).replace(/[&<>"']/g, m => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[m]);
}

// CLASS 1: Stat Card
class StatCard {
  constructor(label, value) {
    this.label = label;
    this.value = value;
  }

  createHTML() {
    return `
      <div class="stat">
        <p class="stat-label">${safe(this.label)}</p>
        <p class="stat-value">${safe(this.value)}</p>
      </div>
    `;
  }
}

// CLASS 2: Report Row
class Report {
  constructor(id, date, location, score) {
    this.id = id;
    this.date = date;
    this.location = location;
    this.score = score;
  }

  createHTML() {
    return `
      <tr>
        <td class="col col-120">${safe(this.id)}</td>
        <td class="col col-240 muted">${safe(this.date)}</td>
        <td class="col col-360 muted">${safe(this.location)}</td>
        <td class="col col-480">
          <div class="score">
            <div class="score-track">
              <div class="score-bar" style="width: ${this.score}%"></div>
            </div>
            <p class="score-text">${this.score}</p>
          </div>
        </td>
        <td class="col col-600 strong">View</td>
      </tr>
    `;
  }
}

// MAIN DASHBOARD CONTROLLER
class Dashboard {
  constructor() {
    this.stats = [];
    this.reports = [];
  }

  addStat(label, value) {
    this.stats.push(new StatCard(label, value));
  }

  addReport(id, date, location, score) {
    this.reports.push(new Report(id, date, location, score));
  }

  renderStats() {
    const statsContainer = document.querySelector(".stats-row");
    if (!statsContainer) return;

    statsContainer.innerHTML = this.stats
      .map(stat => stat.createHTML())
      .join("");
  }

  renderReports() {
    const tbody = document.querySelector(".table tbody");
    if (!tbody) return;

    tbody.innerHTML = this.reports
      .map(rep => rep.createHTML())
      .join("");
  }

  renderAll() {
    this.renderStats();
    this.renderReports();
  }
}

// INIT
window.addEventListener("DOMContentLoaded", function () {
  const dashboard = new Dashboard();

  dashboard.addStat("Total Samples", "15");
  dashboard.addStat("Average Soil Health Score", "95/100");
  dashboard.addStat("Recommendations Implemented", "15");

  dashboard.addReport("#20240715-A", "July 15, 2024", "Zone A", 88);
  dashboard.addReport("#20240701-B", "July 1, 2024", "Zone B", 75);
  dashboard.addReport("#20240615-C", "June 15, 2024", "Zone A", 92);
  dashboard.addReport("#20240601-D", "June 1, 2024", "Zone C", 85);
  dashboard.addReport("#20240515-E", "May 15, 2024", "Zone B", 78);

  dashboard.renderAll();
});
