import type { Project } from "../types";
import meshAiImg from "../assets/projects/mesh-ai.jpg";
import workspaceHubImg from "../assets/projects/workspacehub.jpg";
import flashcardsImg from "../assets/projects/flashcards.svg";

export const projects: Project[] = [
  {
    id: "mesh-ai",
    name: "Mesh AI",
    description: [
      "A full-stack knowledge-base assistant. Upload PDF documents, then chat with an AI that answers questions using only their content (retrieval-augmented generation).",
      "Built with React, TypeScript, Node.js, Express, and MongoDB. Containerized with Docker and deployed on AWS EC2 behind Caddy.",
    ],
    image: meshAiImg,
    githubUrl: "https://github.com/kylecammck-hub/ai-se_project_mesh-ai",
    liveUrl: "https://meshai-kyle.duckdns.org",
  },
  {
    id: "workspacehub",
    name: "WorkspaceHub",
    description: [
      "A multi-tenant workspace app with organizations, role-based access, projects, tasks, bookings, and per-organization feature flags.",
      "Built with React, TypeScript, Express, MongoDB, and JWT auth. I added fixes, refactors, and new features to an existing codebase.",
    ],
    image: workspaceHubImg,
    githubUrl: "https://github.com/kylecammck-hub/ai-se_project_workspacehub",
    liveUrl: "https://workspacehub-client-sigma.vercel.app",
  },
  {
    id: "flashcards",
    name: "Flashcards",
    description: [
      "A responsive app for creating and studying flash card decks, with a card-flip carousel, practice sessions, and validated deck creation.",
      "Built with JavaScript, HTML, and CSS, using a REST API for saving decks and cards.",
    ],
    image: flashcardsImg,
    githubUrl: "https://github.com/kylecammck-hub/ai-se_project_flashcards",
    liveUrl: "https://kylecammck-hub.github.io/ai-se_project_flashcards/",
  },
];
