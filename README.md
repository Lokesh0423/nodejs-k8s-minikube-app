# Node.js App on Kubernetes (Minikube)

A production-style Node.js application containerised with Docker and deployed to Kubernetes using Minikube. Demonstrates end-to-end DevOps practices including container builds, Kubernetes manifests, secrets management, and CI/CD automation via GitHub Actions.

---

## Tech Stack

- **Runtime:** Node.js + Express.js
- **Containerisation:** Docker
- **Orchestration:** Kubernetes (Minikube)
- **CI/CD:** GitHub Actions
- **Secrets Management:** Kubernetes Secrets

---

## Project Structure

```
nodejs-k8s-minikube-app/
├── .github/
│   └── workflows/
│       └── ci.yml           # GitHub Actions CI/CD pipeline
├── kubernetes/
│   ├── deployment.yaml      # K8s Deployment with resource limits & health checks
│   ├── service.yaml         # NodePort Service
│   └── secret.yaml          # Kubernetes Secret template
├── Dockerfile               # Multi-stage Docker build
├── server.js                # Express app
├── package.json
└── README.md
```

---

## Features

- Dockerised Node.js app with optimised image build
- Kubernetes Deployment with:
  - Resource requests and limits
  - Liveness and readiness probes
  - Environment variables injected via Kubernetes Secrets
- GitHub Actions pipeline: lint, build, push to Docker Hub on every push to `main`
- NodePort Service for local access via Minikube

---

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Minikube](https://minikube.sigs.k8s.io/docs/start/)
- [kubectl](https://kubernetes.io/docs/tasks/tools/)

---

## How to Run Locally

```bash
# Start Minikube
minikube start --driver=docker

# Point Docker CLI to Minikube's Docker daemon
eval $(minikube docker-env)

# Build the Docker image
docker build -t my-k8s-app:1.0 .

# Apply Kubernetes manifests
kubectl apply -f kubernetes/

# Access the app
minikube service secret-app
```

---

## CI/CD Pipeline

Every push to `main` triggers the GitHub Actions workflow which:

1. Checks out the code
2. Builds the Docker image
3. Pushes the image to Docker Hub

See `.github/workflows/ci.yml` for full pipeline configuration.

---

## Environment Variables

Sensitive values are managed via Kubernetes Secrets:

| Variable   | Description         |
|------------|---------------------|
| `API_KEY`  | External API key    |
| `DB_PASS`  | Database password   |

Create your secret before deploying:

```bash
kubectl create secret generic my-secret \
  --from-literal=API_KEY=your_api_key \
  --from-literal=DB_PASS=your_db_password
```

---

## Author

**Lokesh Kumar Gaddala**
DevOps & Cloud Engineer | Berlin, Germany
[GitHub](https://github.com/Lokesh0423) · [LinkedIn](https://linkedin.com/in/lokeshkumargaddala)
