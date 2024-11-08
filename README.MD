# Three tier application - deployment best practices

Welcome to the **Three Tier App** repository! This project is a scalable and modular three-tier application designed to provide a robust solution for modern application architectures. It follows a **Frontend**, **Backend**, and **Database** tier approach, leveraging Kubernetes for deployment, Helm for infrastructure management, and maintaining clear separation between the application code and configuration files.

## Table of Contents

1. [Project Structure](#project-structure)
2. [Application Code](#application-code)
3. [Helm Charts](#helm-charts)
4. [Kubernetes Manifests](#kubernetes-manifests)
5. [Installation & Setup](#installation-setup)
6. [Usage](#usage)
7. [Contributing](#contributing)

## Project Structure

The repository is organized into the following directories:

## Application Code

The **`application-code/`** directory contains the code for both the **Frontend** and **Backend** applications:

- **Frontend:** The client-side application responsible for user interaction. It is built using modern frameworks such as React, Angular, or Vue.
- **Backend:** The server-side application that provides APIs and business logic. It is typically built using Node.js, Java, Python, or other server-side technologies.

### Frontend
- This directory contains all the necessary files to build the frontend application.
- You can customize, build, and deploy the frontend application separately from the backend.

### Backend
- The backend directory contains the application logic, API routes, and service layers that handle the interaction with the database and other components.

## Helm Charts

The **`helm/`** directory contains Helm charts that help deploy and manage the infrastructure components required for the Three Tier App. These charts simplify the deployment process and allow for easy configuration of application-related resources.

### How Helm Charts are Organized:
- **nginx-ingress:** For routing traffic into the cluster.
- **grafana:** For deploying grafana.
- **prometheus** For deploying prometheus.
- **loki** For deploying loki.

You can use these Helm charts to deploy the application across various environments with minimal configuration.

## Kubernetes Manifests

The **`k8s/`** directory contains the Kubernetes manifests that are used to deploy the Three Tier App to a Kubernetes cluster. These manifests define the necessary resources like Pods, Services, Deployments, ConfigMaps, Secrets, and Persistent Volumes.

### Structure of the Kubernetes Manifests:
- **backend/deployment_backend.yaml** - Defines how the application should be deployed on Kubernetes.
- **backend/service_backend.yaml** - Defined how application should be expose to the network.
- **frontend/deployment_frontend.yaml** - Defines how the application should be deployed on Kubernetes.
- **frontend/service_frontend.yaml** - Defined how application should be expose to the network.
- **databaseend/deployment_frontend.yaml** - Defines how the mongo DB should be deployed on Kubernetes.
- **database/service_frontend.yaml** - Defined how mongo DB should be expose to the network.

## Installation & Setup

### Prerequisites:
1. **Docker**: Ensure Docker is installed for building container images.
2. **Kubernetes**: A running Kubernetes cluster (local or cloud-based).
3. **Helm**: Ensure Helm is installed to use the Helm charts for deploying infrastructure.
4. **kubectl**: Command-line tool for interacting with Kubernetes.

### Setting Up the Application:
To get started, follow these steps to build and deploy the application:

1. Clone the repository:
    ```bash
    git clone https://github.com/thecyberbaby/three-tier-app.git
    cd three-tier-app
    ```

2. Navigate to the **`application-code/`** folder, and follow the setup instructions for the frontend and backend. This typically includes:
    - Installing dependencies
    - Building the application
    - Running it locally or in Docker containers.

3. Deploy the application using Helm:
    - Navigate to the **`helm/`** directory.
    - Run the following Helm commands to deploy the required applications components (e.g., ingress, prometheus, etc.):
      ```bash
      $ helm install ingress ./helm/inginx-ingress
      or
      $ helm install prometheus ./helm/prometheus
      or
      $ helm install grafana ./helm/grafana


      ```

4. Deploy the application using Kubernetes manifests:
    - Apply the Kubernetes manifests in the **`k8s/`** directory to deploy the app to your Kubernetes cluster:
      ```bash
      $ cd backend
      $ kubectl apply -f .
      
      "then for frontend"

      $ cd ../ && cd frontend
      $ kubectl apply -f .
      ```
      perform same for database also if needed

## Usage

After deploying the infrastructure and the application, you can access the app via the exposed services (Ingress or LoadBalancer). The frontend will interact with the backend through the defined API endpoints.

## Contributing

We welcome contributions to this project! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Open a pull request.
