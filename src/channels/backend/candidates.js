export class CandidateService {
  constructor() {
    this.candidates = [];
  }

  addCandidate(data) {
    const candidate = {
      id: crypto.randomUUID(),
      name: data.name,
      position: data.position,
      linkedin: data.linkedin || null,
      github: data.github || null,
      cv: data.cv || null,
      appliedAt: data.appliedAt || new Date().toISOString().split("T")[0],
      stage: data.stage || "HR Review"
    };

    this.candidates.push(candidate);
    return candidate;
  }

  getAll() {
    return this.candidates;
  }
}