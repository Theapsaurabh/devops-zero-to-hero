# 🚀 Complete DevOps Roadmap

> **A Comprehensive Learning Path from Absolute Beginner to Production-Grade DevOps Engineer – 2026 Edition**

[![Made with ❤️](https://img.shields.io/badge/Made%20with-❤️-red.svg)](https://github.com/yourusername)

---

## 📚 Overview

DevOps is a cultural and technical movement that bridges the gap between **Development** and **Operations** teams. It's about **automation**, **collaboration**, **continuous improvement**, and **reliability** – breaking down silos to deliver software faster, safer, and more reliably.

This roadmap covers **everything from absolute basics to advanced level**, structured into **12 comprehensive phases** with clear topics, tools, and real-world projects.

### 🎯 What You'll Learn

| Phase | Focus | Key Topics |
|-------|-------|------------|
| **Phase 1** | DevOps Fundamentals | Culture, SDLC, Agile, CI/CD concepts |
| **Phase 2** | Version Control | Git, GitHub/GitLab workflows, branching strategies |
| **Phase 3** | Programming & Scripting | Python, Bash, Go – automation languages |
| **Phase 4** | Linux & System Administration | Commands, networking, security, server management |
| **Phase 5** | Containers | Docker, Docker Compose, containerization |
| **Phase 6** | Container Orchestration | Kubernetes, Helm, service mesh |
| **Phase 7** | Infrastructure as Code (IaC) | Terraform, Ansible, Pulumi, CloudFormation |
| **Phase 8** | CI/CD Pipelines | Jenkins, GitHub Actions, GitLab CI, ArgoCD |
| **Phase 9** | Cloud Platforms | AWS, Azure, GCP – core services |
| **Phase 10** | Monitoring & Observability | Prometheus, Grafana, ELK Stack, OpenTelemetry |
| **Phase 11** | Security & Compliance (DevSecOps) | SAST, DAST, secret management, SBOM |
| **Phase 12** | Advanced Topics & Projects | GitOps, FinOps, Platform Engineering, AIOps |

---

## Phase 1: DevOps Fundamentals 🏗️

### 🤔 What is DevOps?

DevOps is **not just a set of tools** – it's a **culture** and **mindset** that emphasizes:

- **Collaboration** between development and operations teams
- **Automation** of repetitive tasks
- **Continuous Improvement** through feedback loops
- **Reliability** and **stability** of systems

### 📋 Key Concepts

| Concept | Description |
|---------|-------------|
| **SDLC** (Software Development Life Cycle) | Planning → Coding → Building → Testing → Releasing → Deploying → Monitoring |
| **Agile Methodology** | Iterative development with frequent releases |
| **Waterfall vs DevOps** | Waterfall: sequential phases; DevOps: continuous, integrated workflow |
| **CI/CD** | Continuous Integration + Continuous Delivery/Deployment |
| **Shift-Left** | Moving testing, security, and quality checks earlier in the pipeline |

### 📊 DevOps Culture Principles

| Principle | Description |
|-----------|-------------|
| **CALMS** | Culture, Automation, Lean, Measurement, Sharing |
| **Feedback Loops** | Fast feedback from production to development |
| **Blameless Post-Mortems** | Learn from failures without finger-pointing |
| **Continuous Learning** | Always improve processes and skills |

---

## Phase 2: Version Control (Git) 📝

> **"All your resources (files) will be held in a Git repository – application code AND infrastructure as code."**

### 🎯 Core Git Concepts

| Concept | Description |
|---------|-------------|
| **Repository** | A folder tracked by Git |
| **Commit** | A snapshot of changes |
| **Branch** | An independent line of development |
| **Merge** | Combining branches |
| **Pull Request** | Request to merge changes into another branch |

### 📝 Essential Git Commands

```bash
# Basic Commands
git init                    # Initialize a repository
git clone <url>             # Clone a remote repository
git add .                   # Stage all changes
git commit -m "message"     # Commit staged changes
git push origin main        # Push to remote
git pull origin main        # Pull from remote

# Branching
git branch <name>           # Create a branch
git checkout <branch>       # Switch to a branch
git merge <branch>          # Merge a branch
git rebase <branch>         # Rebase onto another branch

# History & Logs
git log --oneline           # View commit history
git diff                    # View changes
git status                  # Check current status
```

### 🔀 Branching Strategies

| Strategy | Description | Best For |
|----------|-------------|----------|
| **Git Flow** | Feature → Develop → Release → Main | Large projects with scheduled releases |
| **GitHub Flow** | Feature → Main (with PRs) | Continuous deployment |
| **Trunk-Based** | Short-lived branches, frequent merges to main | High-velocity teams |

### 🛠️ Platforms to Learn

| Platform | Key Features |
|----------|--------------|
| **GitHub** | Actions, Issues, Projects, Codespaces |
| **GitLab** | Built-in CI/CD, Container Registry |
| **Bitbucket** | Jira integration, Pipelines |

---

## Phase 3: Programming & Scripting 💻

> **"Learn a real programming language – not just shell scripting. Absolutely necessary."**

### 🐍 Python – The DevOps Swiss Army Knife

| Topic | What to Learn |
|-------|---------------|
| **Basics** | Variables, loops, functions, classes, error handling |
| **File I/O** | Reading/writing files, JSON, YAML |
| **Automation** | `os`, `subprocess`, `shutil`, `glob` |
| **APIs** | `requests` – interacting with REST APIs |
| **CLI Tools** | `argparse`, `click` – building command-line tools |

### 🐚 Bash/Shell Scripting – Linux Automation

| Topic | What to Learn |
|-------|---------------|
| **Variables** | `$VAR`, `$(command)` |
| **Conditionals** | `if`, `elif`, `else`, `case` |
| **Loops** | `for`, `while`, `until` |
| **Functions** | Reusable script blocks |
| **Cron Jobs** | Scheduling scripts |

### 📝 Sample Bash Script

```bash
#!/bin/bash
# Backup script with timestamp

BACKUP_DIR="/backups"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
FILENAME="backup_$TIMESTAMP.tar.gz"

tar -czf "$BACKUP_DIR/$FILENAME" /var/www/html
echo "Backup created: $FILENAME"
```

### 🛠️ Other Languages

| Language | Use Case |
|----------|----------|
| **Go** | High-performance CLI tools, Kubernetes, Terraform |
| **Ruby** | Chef, Puppet (configuration management) |
| **JavaScript/Node.js** | Frontend builds, NPM scripts |

---

## Phase 4: Linux & System Administration 🐧

> **"Linux is the foundation of DevOps – learn Linux commands first."**

### 📋 Essential Linux Commands

| Category | Commands |
|----------|----------|
| **File Management** | `ls`, `cd`, `pwd`, `mkdir`, `rm`, `cp`, `mv`, `find` |
| **File Permissions** | `chmod`, `chown`, `chgrp`, `umask` |
| **Process Management** | `ps`, `top`, `htop`, `kill`, `systemctl` |
| **Networking** | `ping`, `curl`, `wget`, `netstat`, `ss`, `nslookup` |
| **Text Processing** | `grep`, `awk`, `sed`, `cut`, `sort`, `uniq` |
| **System Info** | `df`, `du`, `free`, `uname`, `lscpu` |

### 🔐 User & Permission Management

```bash
# Users
useradd john                    # Create user
passwd john                     # Set password
usermod -aG docker john         # Add to group
userdel john                    # Delete user

# Permissions (rwx = 4+2+1 = 7)
chmod 755 script.sh             # rwxr-xr-x
chown john:devops file.txt      # Change owner:group

# Sudo
visudo                          # Edit sudoers file
```

### 🌐 Networking Basics

> **"You don't need to be a network engineer – but you must understand IPs, subnets, routing, load balancers, and traffic flow."**

| Concept | Description |
|---------|-------------|
| **IP Address** | Unique identifier for devices on a network |
| **Subnet** | Division of an IP network |
| **DNS** | Translates domain names to IP addresses |
| **TCP/UDP** | Transport protocols |
| **Load Balancer** | Distributes traffic across servers |

---

## Phase 5: Containers (Docker) 🐳

> **Containers package an application and its dependencies together, ensuring consistency across environments.**

### 🎯 Core Docker Concepts

| Concept | Description |
|---------|-------------|
| **Image** | A lightweight, standalone, executable package |
| **Container** | A running instance of an image |
| **Dockerfile** | Instructions for building an image |
| **Registry** | Repository for storing images (Docker Hub) |
| **Volume** | Persistent data storage for containers |

### 📝 Dockerfile Example

```dockerfile
# Multi-stage build for a Python app
FROM python:3.11-slim AS builder

WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

FROM python:3.11-slim
WORKDIR /app
COPY --from=builder /usr/local/lib/python3.11/site-packages /usr/local/lib/python3.11/site-packages
COPY . .

CMD ["python", "app.py"]
```

### 🛠️ Essential Docker Commands

```bash
# Image Management
docker build -t myapp:latest .     # Build an image
docker images                       # List images
docker rmi <image>                  # Remove an image
docker push <username>/myapp:tag   # Push to registry

# Container Management
docker run -d -p 8080:80 myapp     # Run a container
docker ps                          # List running containers
docker stop <container>            # Stop a container
docker rm <container>              # Remove a container
docker logs <container>            # View logs
docker exec -it <container> bash   # Execute inside container

# Docker Compose
docker-compose up -d               # Start all services
docker-compose down                # Stop all services
docker-compose logs                # View logs from all services
```

### 🏗️ Docker Compose Example

```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "8080:80"
    depends_on:
      - db
    environment:
      - DB_HOST=db
  db:
    image: postgres:15
    environment:
      - POSTGRES_PASSWORD=secret
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

### 📝 Project Ideas

- Containerize a simple web application
- Set up a multi-container app with Docker Compose
- Create a CI pipeline that builds and pushes Docker images

---

## Phase 6: Container Orchestration (Kubernetes) ☸️

> **Kubernetes (K8s) is the industry standard for automating container deployment, scaling, and management.**

### 🎯 Core Kubernetes Concepts

| Concept | Description |
|---------|-------------|
| **Pod** | Smallest deployable unit – one or more containers |
| **Deployment** | Desired state for Pods (replicas, updates) |
| **Service** | Exposes Pods to network traffic |
| **Ingress** | HTTP/HTTPS routing to Services |
| **ConfigMap** | Non-sensitive configuration data |
| **Secret** | Sensitive data (passwords, tokens) |
| **PersistentVolume** | Storage that outlives Pods |
| **Helm** | Kubernetes package manager |

### 📝 Kubernetes Manifest Example

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: myapp:latest
        ports:
        - containerPort: 8080
        resources:
          requests:
            memory: "64Mi"
            cpu: "250m"
          limits:
            memory: "128Mi"
            cpu: "500m"
---
apiVersion: v1
kind: Service
metadata:
  name: myapp-service
spec:
  selector:
    app: myapp
  ports:
  - port: 80
    targetPort: 8080
  type: LoadBalancer
```

### 🛠️ Essential kubectl Commands

```bash
# Cluster Management
kubectl cluster-info              # Cluster info
kubectl get nodes                 # List nodes

# Resources
kubectl get pods                  # List pods
kubectl get deployments           # List deployments
kubectl get services              # List services
kubectl get ingress               # List ingress

# Apply & Delete
kubectl apply -f manifest.yaml    # Apply configuration
kubectl delete -f manifest.yaml   # Delete resources

# Debugging
kubectl logs <pod>                # View pod logs
kubectl describe pod <pod>        # Detailed info
kubectl exec -it <pod> -- bash    # Execute in pod
kubectl port-forward <pod> 8080:80 # Port forwarding
```

### 📊 Kubernetes Architecture

```
                    ┌─────────────────────────────┐
                    │      Control Plane           │
                    │  ┌───────────────────────┐  │
                    │  │   API Server          │  │
                    │  ├───────────────────────┤  │
                    │  │   Scheduler           │  │
                    │  ├───────────────────────┤  │
                    │  │   Controller Manager  │  │
                    │  ├───────────────────────┤  │
                    │  │   etcd (Key-Value)    │  │
                    │  └───────────────────────┘  │
                    └─────────────┬───────────────┘
                                  │
                    ┌─────────────┴───────────────┐
                    │      Worker Node            │
                    │  ┌───────────────────────┐  │
                    │  │   Kubelet             │  │
                    │  ├───────────────────────┤  │
                    │  │   Container Runtime   │  │
                    │  ├───────────────────────┤  │
                    │  │   kube-proxy          │  │
                    │  └───────────────────────┘  │
                    │        ┌─────┐ ┌─────┐      │
                    │        │ Pod │ │ Pod │      │
                    │        └─────┘ └─────┘      │
                    └─────────────────────────────┘
```

---

## Phase 7: Infrastructure as Code (IaC) 🏗️

> **"Infrastructure as Code (IaC) is managing and provisioning infrastructure through machine-readable definition files, rather than physical hardware configuration or interactive configuration tools."**

### 🛠️ IaC Tools Comparison

| Tool | Type | Language | Best For |
|------|------|----------|----------|
| **Terraform** | Declarative | HCL | Multi-cloud, state management |
| **Ansible** | Declarative/Procedural | YAML | Configuration management, simple |
| **Pulumi** | Imperative | Python/Go/JS | Developer-friendly IaC |
| **CloudFormation** | Declarative | JSON/YAML | AWS-native |
| **Chef** | Procedural | Ruby | Complex configurations |
| **Puppet** | Declarative | Puppet DSL | Large-scale config mgmt |

### 📝 Terraform Example

```hcl
# main.tf – AWS EC2 instance

provider "aws" {
  region = "us-west-2"
}

resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"

  tags = {
    Name = "WebServer"
    Environment = "Production"
  }
}

resource "aws_s3_bucket" "data" {
  bucket = "my-app-data-bucket"
  acl    = "private"
}
```

### 📝 Ansible Playbook Example

```yaml
---
- name: Configure web servers
  hosts: webservers
  become: yes
  tasks:
    - name: Install nginx
      apt:
        name: nginx
        state: present
    - name: Start nginx
      service:
        name: nginx
        state: started
    - name: Copy website files
      copy:
        src: /local/website/
        dest: /var/www/html/
```

---

## Phase 8: CI/CD Pipelines ⚡

> **"CI/CD pipelines automate the path from code to production."**

### 🔄 CI/CD Lifecycle

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Code      │────▶│   Build     │────▶│   Test      │────▶│   Package   │────▶│   Deploy    │
│   Commit    │     │   (Compile) │     │   (Unit,    │     │   (Docker   │     │   (K8s,     │
│             │     │             │     │    Integ.)  │     │    Image)   │     │   Cloud)    │
└─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘
                                                                                          │
                                                                                          ▼
                                                                                  ┌─────────────┐
                                                                                  │  Monitor    │
                                                                                  │  (Logs,     │
                                                                                  │   Metrics)  │
                                                                                  └─────────────┘
```

### 🛠️ CI/CD Tools

| Tool | Description | Best For |
|------|-------------|----------|
| **Jenkins** | Extensible automation server | Custom pipelines, legacy systems |
| **GitHub Actions** | Native GitHub CI/CD | GitHub-centric teams |
| **GitLab CI** | Integrated with GitLab | All-in-one DevOps platform |
| **ArgoCD** | GitOps continuous delivery | Kubernetes-native CD |
| **Harness** | AI-driven CI/CD | Modern, enterprise CD |

### 📝 GitHub Actions Workflow Example

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.11'
      
      - name: Install dependencies
        run: |
          pip install -r requirements.txt
          pip install pytest
      
      - name: Run tests
        run: pytest tests/
      
      - name: Build Docker image
        run: docker build -t myapp:${{ github.sha }} .
      
      - name: Push to registry
        run: |
          echo ${{ secrets.DOCKER_PASSWORD }} | docker login -u ${{ secrets.DOCKER_USERNAME }} --password-stdin
          docker push myapp:${{ github.sha }}
  
  deploy:
    needs: build-and-test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - name: Deploy to Kubernetes
        run: |
          kubectl set image deployment/myapp myapp=myapp:${{ github.sha }}
          kubectl rollout status deployment/myapp
```

---

## Phase 9: Cloud Platforms ☁️

> **"In 2026, successful engineers won't be Cloud-only or DevOps-only – the skills are merging."**

### 🎯 Core Cloud Services to Learn

| Service Category | AWS | Azure | GCP |
|------------------|-----|-------|-----|
| **Compute** | EC2, Lambda | VMs, Functions | Compute Engine, Cloud Functions |
| **Storage** | S3, EBS | Blob Storage | Cloud Storage, Persistent Disk |
| **Database** | RDS, DynamoDB | SQL Database, Cosmos DB | Cloud SQL, Firestore |
| **Networking** | VPC, Route53 | VNet, DNS | VPC, Cloud DNS |
| **Container** | ECS, EKS | AKS | GKE |
| **CI/CD** | CodePipeline | DevOps | Cloud Build |

### 📝 Key Skills to Master

| Skill | Description |
|-------|-------------|
| **IAM** | Identity and Access Management – users, roles, policies |
| **VPC** | Virtual Private Cloud – networking, subnets, security groups |
| **Auto Scaling** | Automatically adjust resources based on demand |
| **Load Balancers** | Distribute traffic across instances |
| **Cost Management** | Monitor and optimize cloud spend (FinOps) |

---

## Phase 10: Monitoring & Observability 📊

> **"You can't improve what you don't measure."**

### 📈 The Three Pillars of Observability

| Pillar | Description | Tools |
|--------|-------------|-------|
| **Logs** | Structured/unstructured event records | ELK Stack, Loki, Fluent Bit |
| **Metrics** | Numerical measurements over time | Prometheus, Graphite |
| **Traces** | Request flow through distributed systems | Jaeger, Zipkin |

### 🛠️ Monitoring Tools

| Tool | Purpose | Key Features |
|------|---------|--------------|
| **Prometheus** | Metrics collection | Time-series DB, Pull-based |
| **Grafana** | Visualization | Dashboards, Alerting |
| **ELK Stack** | Logging | Elasticsearch + Logstash + Kibana |
| **Loki** | Log aggregation | Lightweight, integrates with Grafana |
| **Alertmanager** | Alerting | Route alerts, deduplication |
| **Datadog** | SaaS monitoring | APM, Infrastructure, Logs |

### 📝 Prometheus + Grafana Setup

```yaml
# prometheus.yml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'kubernetes'
    kubernetes_sd_configs:
      - role: pod
    relabel_configs:
      - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_scrape]
        action: keep
        regex: true
```

---

## Phase 11: Security & Compliance (DevSecOps) 🔒

> **"Security is not a gated process; it is a continuous thread."**

### 🔐 DevSecOps Practices

| Practice | Description |
|----------|-------------|
| **Shift-Left Security** | Integrate security early in the CI/CD pipeline |
| **SAST** | Static Application Security Testing (code analysis) |
| **DAST** | Dynamic Application Security Testing (running app) |
| **SCA** | Software Composition Analysis (dependency scanning) |
| **Secret Management** | Store secrets securely (Hashicorp Vault, AWS Secrets Manager) |
| **SBOM** | Software Bill of Materials – track all components |
| **Image Scanning** | Scan container images for vulnerabilities |

### 🛠️ Security Tools

| Category | Tools |
|----------|-------|
| **SAST** | SonarQube, Semgrep, Checkmarx |
| **DAST** | OWASP ZAP, Burp Suite |
| **SCA** | Snyk, Dependabot, Trivy |
| **Secret Management** | HashiCorp Vault, AWS Secrets Manager |
| **Container Security** | Trivy, Clair, Anchore |
| **Compliance** | Open Policy Agent (OPA), Kyverno |

---

## Phase 12: Advanced Topics & Projects 🚀

### 🎯 GitOps

> **GitOps uses Git as the single source of truth for declarative infrastructure and applications.**

| Tool | Description |
|------|-------------|
| **ArgoCD** | Declarative, GitOps continuous delivery for Kubernetes |
| **FluxCD** | GitOps operator for Kubernetes |

### 💰 FinOps

> **FinOps is the practice of managing cloud costs and optimizing spend.**

| Practice | Description |
|----------|-------------|
| **Cost Tagging** | Tag resources for cost allocation |
| **Budget Alerts** | Set budgets and get alerts |
| **Resource Optimization** | Rightsize instances, delete unused resources |
| **Savings Plans** | Commit to usage for discounts |

### 🏗️ Platform Engineering

> **Platform Engineering builds internal developer platforms (IDPs) to abstract infrastructure complexity.**

| Concept | Description |
|---------|-------------|
| **IDP** | Internal Developer Platform – self-service for developers |
| **Backstage** | Spotify's open-source IDP |
| **Crossplane** | Control plane for multi-cloud infrastructure |

### 🤖 AIOps

> **AIOps uses AI and ML to automate IT operations tasks.**

| Application | Description |
|-------------|-------------|
| **Anomaly Detection** | Automatically detect unusual patterns |
| **Root Cause Analysis** | Identify the source of issues |
| **Intelligent Alerting** | Reduce alert fatigue |

---

## 📅 Suggested Timeline

| Phase | Duration | Focus |
|-------|----------|-------|
| **Phase 1** (Fundamentals) | 1-2 weeks | DevOps culture, CI/CD concepts |
| **Phase 2** (Git) | 1-2 weeks | Version control, branching strategies |
| **Phase 3** (Programming) | 3-4 weeks | Python, Bash, automation |
| **Phase 4** (Linux) | 2-3 weeks | Commands, networking, scripting |
| **Phase 5** (Docker) | 2-3 weeks | Containers, Docker Compose |
| **Phase 6** (Kubernetes) | 4-6 weeks | Orchestration, Helm |
| **Phase 7** (IaC) | 2-3 weeks | Terraform, Ansible |
| **Phase 8** (CI/CD) | 3-4 weeks | Pipelines, automation |
| **Phase 9** (Cloud) | 3-4 weeks | AWS/Azure/GCP core services |
| **Phase 10** (Observability) | 2-3 weeks | Monitoring, logging, tracing |
| **Phase 11** (Security) | 2-3 weeks | DevSecOps practices |
| **Phase 12** (Advanced) | 2-3 weeks | GitOps, FinOps, Platform Engineering |

> **Total Estimated Time**: 25-40 weeks (6-10 months) with consistent daily practice

---

## 🛠️ Complete DevOps Tool Stack

| Category | Essential Tools | Nice-to-Have |
|----------|-----------------|--------------|
| **Version Control** | Git, GitHub/GitLab | Bitbucket |
| **Programming** | Python, Bash | Go, Ruby |
| **Containers** | Docker, Docker Compose | Podman |
| **Orchestration** | Kubernetes, Helm | OpenShift, Rancher |
| **IaC** | Terraform | Pulumi, CloudFormation |
| **Configuration Mgmt** | Ansible | Chef, Puppet |
| **CI/CD** | GitHub Actions, Jenkins, ArgoCD | GitLab CI, Harness |
| **Cloud** | AWS (or Azure/GCP) | Multi-cloud |
| **Monitoring** | Prometheus, Grafana | Datadog, New Relic |
| **Logging** | ELK Stack, Loki | Splunk |
| **Security** | Trivy, Snyk, Vault | SonarQube, OPA |
| **Package Management** | Helm, Terraform Registry | Artifactory |

---

## 🏗️ Hands-On Projects

### 🟢 Beginner Projects

| Project | Skills Learned |
|---------|----------------|
| **Static Website Hosting** | S3, CloudFront, DNS |
| **CI/CD Pipeline** | GitHub Actions, Docker, automated testing |
| **Linux Server Setup** | SSH, firewall, Nginx, SSL |

### 🟡 Intermediate Projects

| Project | Skills Learned |
|---------|----------------|
| **Microservices on Kubernetes** | Deployments, Services, Ingress, ConfigMaps |
| **Terraform Infrastructure** | AWS VPC, EC2, RDS, S3 |
| **Monitoring Stack** | Prometheus, Grafana, Alertmanager |

### 🔴 Advanced Projects

| Project | Skills Learned |
|---------|----------------|
| **GitOps with ArgoCD** | Declarative CD, multi-cluster |
| **Full-Stack App with Observability** | Logging, tracing, metrics |
| **Multi-Cloud Infrastructure** | Terraform, AWS + GCP, cost optimization |

---

## 📚 Recommended Resources

### 📖 Books

| Book | Focus |
|------|-------|
| **"The Phoenix Project"** – Gene Kim | DevOps culture and principles |
| **"The DevOps Handbook"** – Kim, Humble, Debois | Practical DevOps practices |
| **"Site Reliability Engineering"** – Google | SRE practices |
| **"Kubernetes Up & Running"** – Burns, Beda | Kubernetes fundamentals |
| **"Terraform: Up & Running"** – Yevgeniy Brikman | IaC with Terraform |

### 🖥️ Online Platforms

| Platform | Best For |
|----------|----------|
| **KodeKloud** | Hands-on labs (Linux, Docker, K8s) |
| **Linux Academy / A Cloud Guru** | Cloud certifications |
| **Katacoda** | Interactive Kubernetes scenarios |
| **Killercoda** | Kubernetes scenarios |

### 🔗 GitHub Repositories

| Repository | Focus |
|------------|-------|
| **milanm/DevOps-Roadmap** | Complete roadmap with resources |
| **devopsbulletin/devops-roadmap** | DevOps, FinOps, Cloud Security |
| **RuhiniSiyara/6months-devops-engineer-learning-path** | 6-month program |

### 📜 Certifications

| Certification | Provider | Focus |
|---------------|----------|-------|
| **CKA** (Certified Kubernetes Administrator) | CNCF | Kubernetes |
| **CKAD** (Certified Kubernetes Application Developer) | CNCF | Kubernetes development |
| **AWS Certified DevOps Engineer** | AWS | AWS DevOps |
| **HashiCorp Certified: Terraform Associate** | HashiCorp | Terraform |
| **Certified Jenkins Engineer** | CloudBees | Jenkins |

---

## 💡 Tips for Success

1. **Build a Home Lab**: Set up a local environment (Minikube, Docker Desktop, Vagrant) to practice

2. **Contribute to Open Source**: Start with small fixes, work your way up

3. **Automate Everything**: If you do something twice, automate it

4. **Document Your Learning**: Maintain a blog or GitHub portfolio

5. **Join Communities**: DevOps subreddit, Discord, local meetups

6. **Think in Terms of Systems**: Understand how components interact, not just individual tools

7. **Practice Incident Response**: Simulate failures and practice recovery

---

## 🎯 Interview Preparation

### 📋 Key Topics to Master

| Topic | What to Know |
|-------|--------------|
| **Linux** | Commands, permissions, processes, logs |
| **Networking** | DNS, TCP/IP, ports, load balancing |
| **Git** | Merge vs rebase, conflict resolution |
| **CI/CD** | Pipeline design, artifact management, rollbacks |
| **Kubernetes** | Pod lifecycle, scheduling, networking, storage |
| **Troubleshooting** | Debugging skills, incident response |

### ❓ Common Interview Questions

1. "Explain the difference between CI and CD."
2. "How would you design a CI/CD pipeline for a microservices architecture?"
3. "What's your experience with Kubernetes? How do you debug a failing pod?"
4. "Explain Infrastructure as Code. Why is it important?"
5. "How do you monitor a production system? What metrics matter?"
6. "Describe a time you handled a production incident."

---

## 📊 Quick Reference Cheat Sheet

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         DEVOPS MASTER CHEAT SHEET                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  PHASE 1: Fundamentals      │  PHASE 2: Git                                │
│  ────────────────────       │  ────────────                                │
│  • DevOps Culture (CALMS)   │  • clone, add, commit, push, pull            │
│  • SDLC & Agile             │  • Branching (feature → main)                │
│  • CI/CD concepts           │  • PR reviews, conflict resolution           │
│                                                                             │
│  PHASE 3: Scripting         │  PHASE 4: Linux                              │
│  ────────────────────       │  ─────────────                               │
│  • Python (automation)      │  • Commands (ls, grep, awk, sed)             │
│  • Bash (shell scripts)     │  • Permissions (chmod, chown)                │
│  • CLI tools (argparse)     │  • Networking (DNS, TCP/IP, ports)           │
│                                                                             │
│  PHASE 5: Docker            │  PHASE 6: Kubernetes                         │
│  ────────────────────       │  ─────────────────────                       │
│  • Dockerfile, build, run   │  • Pods, Deployments, Services               │
│  • Docker Compose           │  • Ingress, ConfigMaps, Secrets              │
│  • Registry (push/pull)     │  • Helm (package manager)                    │
│                                                                             │
│  PHASE 7: IaC               │  PHASE 8: CI/CD                              │
│  ────────────────────       │  ─────────────                               │
│  • Terraform (HCL)          │  • GitHub Actions / Jenkins                  │
│  • Ansible (YAML)           │  • Pipeline stages (build → test → deploy)   │
│  • State management         │  • ArgoCD (GitOps)                           │
│                                                                             │
│  PHASE 9: Cloud             │  PHASE 10: Observability                     │
│  ────────────────────       │  ─────────────────────                       │
│  • AWS (EC2, S3, RDS, VPC)  │  • Prometheus (metrics)                      │
│  • IAM, Auto Scaling        │  • Grafana (dashboards)                      │
│  • Load Balancers           │  • ELK/Loki (logs)                           │
│                                                                             │
│  PHASE 11: Security         │  PHASE 12: Advanced                          │
│  ────────────────────       │  ─────────────────                           │
│  • SAST / DAST / SCA        │  • GitOps (ArgoCD/Flux)                      │
│  • Secret Management        │  • FinOps (cost optimization)                │
│  • Container scanning       │  • Platform Engineering                      │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 🤝 Contributing

If you find any errors or want to suggest improvements, please feel free to open an issue or submit a pull request.

## 📜 License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

---

> **🚀 Remember**: DevOps is a journey, not a destination. Start with the fundamentals, build projects, and continuously improve. The best DevOps engineers don't just know tools – they understand systems, automate wisely, and embrace a culture of learning.

---
**🌟 If this roadmap helps you, please give it a star! 🌟**
**🌟 If this roadmap helps you, please give it a star! 🌟**
