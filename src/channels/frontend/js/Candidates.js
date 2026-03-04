import { CandidateService } from "../backend/candidates.js";

class CandidateUI {
  constructor(container, service) {
    this.container = container;
    this.service = service;
  }

  createCard(candidate) {
    const article = document.createElement("article");
    article.className = "candidate-card";

    article.innerHTML = `
      <div class="candidate-left">
        <div class="candidate-avatar"></div>

        <div class="candidate-main">
          <h2 class="candidate-name">${candidate.name}</h2>
          <p class="candidate-position">${candidate.position}</p>

          <div class="candidate-links">
            ${candidate.linkedin ? `<a href="${candidate.linkedin}" class="candidate-link" target="_blank">LinkedIn</a>` : ""}
            ${candidate.github ? `<a href="${candidate.github}" class="candidate-link" target="_blank">GitHub</a>` : ""}
            ${candidate.cv ? `<a href="${candidate.cv}" class="candidate-link" target="_blank">View CV</a>` : ""}
          </div>
        </div>
      </div>

      <div class="candidate-right">
        <div class="candidate-top">
          <span class="candidate-date">Applied on ${candidate.appliedAt}</span>
          <button class="btn-audit">Audit Logs</button>
        </div>

        <div class="stage-wrapper">
          <button class="stage-arrow">&#10094;</button>

          <div class="stage-box">
            <span class="stage-title">${candidate.stage}</span>
          </div>

          <button class="stage-arrow">&#10095;</button>
        </div>
      </div>
    `;

    return article;
  }

  render() {
    this.container.innerHTML = "";
    const candidates = this.service.getAll();
    candidates.forEach(c => {
      this.container.appendChild(this.createCard(c));
    });
  }
}

const container = document.getElementById("candidatesContainer");
const service = new CandidateService();
const ui = new CandidateUI(container, service);

window.addCandidate = function(data) {
  service.addCandidate(data);
  ui.render();
};
