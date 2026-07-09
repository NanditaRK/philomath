# Philomath

A full-stack **Next.js** application built primarily as a **DevOps learning project**. The application serves random educational content ranging from fun animal facts to deep dives into topics like robotics, networking, and how the internet works.

While the content is meant to be entertaining and educational, the real objective of this project was to gain hands-on experience building, deploying, and maintaining a modern production-ready web application using self-hosted infrastructure.

> **No cloud providers were used.** Everything runs on a self-hosted home server.

---

##  Features

*  Authentication

  * Email & Password
  * Google OAuth
*  User account management
*  Random educational articles
*  Random fact generator
*  Modern responsive UI built with shadcn/ui
*  End-to-end type safety
*  Runtime validation with Zod
*  Fully automated CI/CD pipeline
*  Containerized deployment
*  Completely self-hosted =)

---

# Tech Stack

## Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS
* shadcn/ui

## Backend

* Next.js App Router
* Better Auth
* Prisma ORM
* PostgreSQL
* Zod

## Authentication

* Better Auth
* Google OAuth
* Email/Password Authentication

## Database

* PostgreSQL
* Prisma ORM

## DevOps

* Docker
* GitHub Actions
* GitHub Container Registry (GHCR)
* CapRover
* Self-hosted Linux Server

---

# Project Structure

```text
.
├── app/
├── components/
├── context/
├── hooks/
├── lib/
├── prisma/
├── public/
├── styles/
├── types/
└── ...
```

---

# Getting Started

## Prerequisites

* Node.js 20+
* PostgreSQL
* Docker (optional)
* npm, pnpm, or yarn

---

## Installation

Clone the repository:

```bash
git clone https://github.com/NanditaRK/philomath.git
cd philomath
```

Install dependencies:

```bash
# npm
npm install

# pnpm
npm install

# yarn (recommended)
yarn install
```

Create an environment file:

```bash
cp .env.example .env
```

Configure your database and authentication credentials.

Run Prisma migrations:

```bash
npx prisma migrate dev
```

Generate the Prisma client:

```bash
npx prisma generate
```

Start the development server:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn run dev
```

---

# Environment Variables

Example:

```env
DATABASE_URL=

BETTER_AUTH_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

---

# Authentication

Authentication is powered by **Better Auth** and supports:

* Google OAuth
* Email & Password login

Sessions are securely managed and persisted using PostgreSQL.

---

# Validation

All incoming data is validated using **Zod**, providing:

* Runtime validation
* Strong TypeScript inference
* Safer APIs
* Better developer experience

---

# Database

The application uses:

* PostgreSQL
* Prisma ORM

Prisma manages:

* Migrations
* Database schema
* Type-safe queries
* Client generation

---

# UI

The frontend is built with:

* Next.js App Router
* Tailwind CSS
* shadcn/ui

The goal was to keep the interface simple but responsive and easy to extend while focusing most of the effort on infrastructure and deployment.

---

# CI/CD Pipeline

One of the primary goals of this project was learning modern DevOps workflows.

Every push to the main branch automatically triggers a GitHub Actions workflow that:

1. Installs dependencies
2. Runs the build
3. Builds a Docker image
4. Pushes the image to GitHub Container Registry (GHCR)
5. Deploys the newest image to CapRover
6. Restarts the running application

The result is a completely automated deployment pipeline requiring little to no manual intervention.

```text
Git Push
    │
    ▼
GitHub Actions
    │
    ├── Install Dependencies
    ├── Build Next.js
    ├── Build Docker Image
    ├── Push to GHCR
    ▼
GitHub Container Registry
    │
    ▼
CapRover
    │
    ▼
Home Server
```

---

# Docker

The application is fully containerized.

Docker provides:

* Consistent deployments
* Easy local development
* Reproducible production builds
* Simple rollback capabilities

---

# Deployment

Deployment is handled through **CapRover**, running on a self-hosted home server.

The deployment process pulls the latest Docker image from GitHub Container Registry and updates the running application automatically.

Everything—including the application, database, reverse proxy, and deployment platform—is hosted on personal hardware.


Just a home lab, Docker containers, and a lot of learning.

---

# Why This Project?

I wanted to answer a bunch of questions I had including:

* How does a modern CI/CD pipeline work?
* How do Docker deployments work?
* How does container orchestration simplify deployments?
* How can authentication be integrated cleanly?
* What does a production-ready Next.js setup look like?
* How can everything be self-hosted?

Instead of creating another CRUD application, I wanted something fun that could continuously grow while giving me an excuse to explore modern DevOps tooling.


---

# Future Improvements

* Markdown-based article editor
* Categories and tags
* Search functionality
* User favorites
* Reading history
* Admin dashboard
* Article analytics
* Comments
* Dark/light theme improvements
* Automated backups
* Monitoring and observability
* Infrastructure as Code (Terraform/Ansible)

---


## Final Thoughts

This started as a simple "random facts" website but quickly evolved into a playground for learning modern software engineering practices.

The articles are there to entertain and teach.

And perhaps anyone browsing the repository can pick up a few ideas for building and deploying their own self-hosted applications.
