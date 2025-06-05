# Node.js App on Kubernetes

This is a simple Node.js application deployed to Kubernetes using Minikube.  
It includes a `Dockerfile` and a basic `server.js` file, and demonstrates how to:

- Build Docker images  
- Run on Minikube  
- Expose the app as a service  
- Access it via NodePort  

## 🔧 Tech Stack
- Node.js  
- Express.js  
- Docker  
- Kubernetes (Minikube)  

## 🚀 How to Run

```bash
minikube start --driver=docker
eval $(minikube docker-env)
docker build -t my-k8s-app:1.0 .
kubectl create deployment my-k8s-app --image=my-k8s-app:1.0
kubectl expose deployment my-k8s-app --type=NodePort --port=3000
minikube service my-k8s-app
# nodejs-k8s-minikube-app
