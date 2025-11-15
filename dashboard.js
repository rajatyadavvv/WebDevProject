      // CLASS 1: StatCard - For the statistics boxes
      class StatCard {
        constructor(label, value) {
          this.label = label;
          this.value = value;
        }

        // Method to create HTML for stat card
        createHTML() {
          return `
            <div class="stat">
              <p class="stat-label">${this.label}</p>
              <p class="stat-value">${this.value}</p>
            </div>
          `;
        }
      }

      // CLASS 2: Report - For each report row
      class Report {
        constructor(id, date, location, score) {
          this.id = id;
          this.date = date;
          this.location = location;
          this.score = score;
        }

        // Method to create HTML for report row
        createHTML() {
          return `
            <tr>
              <td class="col col-120">${this.id}</td>
              <td class="col col-240 muted">${this.date}</td>
              <td class="col col-360 muted">${this.location}</td>
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

      // CLASS 3: Dashboard - Main class that manages everything
      class Dashboard {
        constructor() {
          this.stats = [];
          this.reports = [];
        }

        // Method to add stat cards
        addStat(label, value) {
          const stat = new StatCard(label, value);
          this.stats.push(stat);
        }

        // Method to add reports
        addReport(id, date, location, score) {
          const report = new Report(id, date, location, score);
          this.reports.push(report);
        }

        // Method to display all stats
        displayStats() {
          let statsHTML = '';
          for (let i = 0; i < this.stats.length; i++) {
            statsHTML += this.stats[i].createHTML();
          }
          document.querySelector('.stats-row').innerHTML = statsHTML;
        }

        // Method to display all reports
        displayReports() {
          let reportsHTML = '';
          for (let i = 0; i < this.reports.length; i++) {
            reportsHTML += this.reports[i].createHTML();
          }
          document.querySelector('.table tbody').innerHTML = reportsHTML;
        }
      }

      window.onload = function() {
        // Create new Dashboard object
        const myDashboard = new Dashboard();

        // Add stats using the class
        myDashboard.addStat('Total Samples', '15');
        myDashboard.addStat('Average Soil Health Score', '95/100');
        myDashboard.addStat('Recommendations Implemented', '15');

        // Add reports using the class
        myDashboard.addReport('#20240715-A', 'July 15, 2024', 'zone A', 88);
        myDashboard.addReport('#20240701-B', 'July 1, 2024', 'zone B', 75);
        myDashboard.addReport('#20240615-C', 'June 15, 2024', 'zone A', 92);
        myDashboard.addReport('#20240601-D', 'June 1, 2024', 'zone C', 85);
        myDashboard.addReport('#20240515-E', 'May 15, 2024', 'zone B', 78);

        // Display everything on the page
        myDashboard.displayStats();
        myDashboard.displayReports();
      };
