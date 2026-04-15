# 🐳 Docker Layers, Volumes, and Networks – Complete Guide

> A comprehensive, beginner-to-intermediate guide covering how Docker builds images, persists data, and enables container communication.

---

## 📑 Table of Contents

- [Prerequisites](#prerequisites)
- [1. Docker Layers](#1-docker-layers--the-building-blocks-of-images)
- [2. Docker Volumes](#2-docker-volumes--persisting-data)
- [3. Docker Networks](#3-docker-networks--container-communication)
- [4. Docker Compose](#4-docker-compose--orchestrating-everything)
- [5. Complete Workflow](#5-complete-workflow--putting-it-all-together)
- [6. Debugging & Troubleshooting](#6-debugging--troubleshooting)
- [7. Best Practices](#7-best-practices)
- [Summary & Cheat Sheet](#summary--cheat-sheet)

---

## Prerequisites

Before diving in, make sure you have:

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed (Windows / macOS / Linux)
- Basic familiarity with the terminal
- Docker version 20.10 or higher (`docker --version` to check)

---

## 1. Docker Layers – The Building Blocks of Images

### What Are Docker Layers?

A Docker image is **not** a single monolithic file. It's a stack of multiple **read-only layers**, where each layer captures a set of filesystem changes (installing a package, copying files, etc.). When you run a container, Docker adds a thin writable layer on top — called the **container layer** — where all runtime changes live.

```
┌────────────────────────────────┐
│  Container Layer (read/write)  │  ← Runtime changes (temporary)
├────────────────────────────────┤
│  Layer 5: COPY . .             │  ← App source code
├────────────────────────────────┤
│  Layer 4: RUN npm install      │  ← Dependencies installed
├────────────────────────────────┤
│  Layer 3: COPY package*.json   │  ← Package manifest
├────────────────────────────────┤
│  Layer 2: WORKDIR /app         │  ← Working directory set
├────────────────────────────────┤
│  Layer 1: FROM node:18-alpine  │  ← Base OS + Node.js runtime
└────────────────────────────────┘
```

---

### Why Layered Architecture?

| Benefit | Explanation |
|---------|-------------|
| **Reusability** | Shared base layers (e.g., `ubuntu`, `node`) are stored once and reused across images |
| **Build Speed** | Unchanged layers are served from cache — rebuilds are nearly instant |
| **Portability** | Pushing/pulling only transfers new or changed layers |
| **Consistency** | Immutable layers guarantee the same image behaves identically everywhere |
| **Storage Efficiency** | Multiple containers sharing the same image share its layers on disk |

---

### How Are Layers Created?

Every Dockerfile instruction that modifies the filesystem creates a new layer:

| Instruction | Creates a Layer? | Notes |
|-------------|-----------------|-------|
| `FROM` | ✅ Yes (base) | Starting point — pulls base image layers |
| `RUN` | ✅ Yes | Captures results of shell commands |
| `COPY` | ✅ Yes | Adds files from build context into image |
| `ADD` | ✅ Yes | Like COPY but supports URLs and tar extraction |
| `WORKDIR` | ✅ Yes | Sets the working directory |
| `ENV` | ✅ Yes | Sets environment variables |
| `ARG` | ✅ Yes | Build-time variable (not in final image) |
| `CMD` | ❌ No | Runtime instruction — metadata only |
| `ENTRYPOINT` | ❌ No | Runtime instruction — metadata only |
| `EXPOSE` | ❌ No | Documentation hint — metadata only |
| `LABEL` | ❌ No | Metadata only |

---

### Example Dockerfile with Layer Breakdown

```dockerfile
# Layer 1: Pull the official Node.js 18 Alpine image
FROM node:18-alpine

# Layer 2: Set working directory inside container
WORKDIR /app

# Layer 3: Copy dependency files first (smart caching!)
COPY package*.json ./

# Layer 4: Install npm dependencies
RUN npm install

# Layer 5: Copy the rest of the application code
COPY . .

# Expose port (metadata only — no new layer)
EXPOSE 3000

# Default command to run (metadata only — no new layer)
CMD ["node", "index.js"]
```

**Build output showing each layer:**
```
 => [1/5] FROM node:18-alpine                         0.5s
 => [2/5] WORKDIR /app                                0.1s
 => [3/5] COPY package*.json ./                       0.1s
 => [4/5] RUN npm install                             8.3s
 => [5/5] COPY . .                                    0.2s
 => exporting to image                                0.4s
```

**On the next build (only code changed):**
```
 => [1/5] FROM node:18-alpine                    CACHED
 => [2/5] WORKDIR /app                           CACHED
 => [3/5] COPY package*.json ./                  CACHED
 => [4/5] RUN npm install                        CACHED
 => [5/5] COPY . .                               0.2s    ← Only this rebuilds
```

> 💡 **Pro Tip:** Always copy `package.json` before your source code. Since dependencies change less often than code, npm install results are cached and the slow install step is skipped on most rebuilds.

---

### Layer Immutability & Copy-on-Write (CoW)

Once created, layers are **read-only and never modified**. When a running container changes a file, Docker uses a **Copy-on-Write** strategy:

1. The original file lives in a read-only layer
2. Docker copies that file up to the writable container layer
3. The container modifies only its own copy
4. The original image layer remains untouched

This means multiple containers can share the same image layers simultaneously, with each container maintaining only a thin diff layer of its own changes.

---

### Inspecting Layers

```bash
# View all layers and their sizes
docker image history my-image

# Detailed image info including all layers
docker image inspect my-image

# See total image size
docker images my-image
```

---

### Layer Optimization Tips

```dockerfile
# ❌ BAD – Every RUN creates a new layer with intermediate files
RUN apt-get update
RUN apt-get install -y curl
RUN apt-get clean

# ✅ GOOD – Chain commands to create a single, clean layer
RUN apt-get update && \
    apt-get install -y curl && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*
```

```dockerfile
# ❌ BAD – Copies everything first, busting cache on any file change
COPY . .
RUN npm install

# ✅ GOOD – Separates dependency install from app code
COPY package*.json ./
RUN npm install
COPY . .
```

Use a `.dockerignore` file to exclude unnecessary files from the build context:

```
# .dockerignore
node_modules
.git
*.log
.env
dist
coverage
```

---

## 2. Docker Volumes – Persisting Data

### The Problem: Containers Are Ephemeral

By default, **any data written inside a container is lost when the container stops or is removed**. This is by design — containers are stateless and disposable. But for databases, file uploads, or any stateful workload, you need data to survive beyond the container's life.

```bash
# ❌ Without volumes — data disappears when container is removed
docker run -d -p 27017:27017 --name mongo-temp mongo

# ... add some data via Compass or mongosh ...

docker stop mongo-temp
docker rm mongo-temp

docker run -d -p 27017:27017 --name mongo-new mongo
# 💔 Your data is gone
```

---

### The Solution: Docker Volumes

A **volume** is a storage area managed entirely by Docker, stored on the host filesystem but outside the container's writable layer. Data in a volume persists independently of any container's lifecycle.

```
Host Machine                     Container
┌─────────────────────┐          ┌───────────────────┐
│  Docker Volume      │          │                   │
│  /var/lib/docker/   │◄────────►│  /data/db         │
│  volumes/mongo_data │  mounted │  (MongoDB files)  │
└─────────────────────┘          └───────────────────┘
```

---

### Types of Docker Storage

| Type | Syntax | Managed by | Best for |
|------|--------|------------|----------|
| **Named Volume** | `-v my_volume:/container/path` | Docker | Databases, persistent app data |
| **Bind Mount** | `-v /host/path:/container/path` | You | Development (live code sync) |
| **tmpfs Mount** | `--tmpfs /container/path` | Memory | Sensitive data, caches |
| **Anonymous Volume** | `-v /container/path` | Docker | Temporary data, scratch space |

---

### Step-by-Step: Named Volumes with MongoDB

**Step 1 – Create a named volume:**
```bash
docker volume create mongo_data
```

**Step 2 – Run MongoDB with the volume mounted:**
```bash
docker run -d \
  --name mongo-persistent \
  -p 27017:27017 \
  -v mongo_data:/data/db \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=secret \
  mongo:7
```

**Step 3 – Add some data** (via MongoDB Compass or mongosh):
```bash
docker exec -it mongo-persistent mongosh -u admin -p secret
```
```js
use myapp
db.users.insertOne({ name: "Alice", role: "admin" })
```

**Step 4 – Stop and remove the container:**
```bash
docker stop mongo-persistent
docker rm mongo-persistent
```

**Step 5 – Start a new container using the same volume:**
```bash
docker run -d \
  --name mongo-restored \
  -p 27017:27017 \
  -v mongo_data:/data/db \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=secret \
  mongo:7
```

**Step 6 – Verify data is still there:**
```bash
docker exec -it mongo-restored mongosh -u admin -p secret
```
```js
use myapp
db.users.find()
// { name: "Alice", role: "admin" } ← still there! 🎉
```

---

### Step-by-Step: Bind Mounts for Development

Bind mounts sync a directory on your host directly into the container — ideal for local development where you want code changes reflected immediately without rebuilding:

```bash
docker run -d \
  --name dev-backend \
  -p 3000:3000 \
  -v $(pwd):/app \
  -v /app/node_modules \
  node:18-alpine \
  sh -c "npm install && node index.js"
```

> ⚠️ The second `-v /app/node_modules` creates an anonymous volume that "shadows" the host's node_modules, preventing host platform binaries from interfering with the container.

---

### Volume Commands Cheat Sheet

| Command | Description |
|---------|-------------|
| `docker volume ls` | List all volumes |
| `docker volume create <name>` | Create a named volume |
| `docker volume inspect <name>` | Show volume details (mount path, driver) |
| `docker volume rm <name>` | Remove a specific volume ⚠️ |
| `docker volume prune` | Remove all unused volumes ⚠️ |

---

### Backing Up & Restoring Volumes

```bash
# Backup: dump volume contents to a tar archive on your host
docker run --rm \
  -v mongo_data:/data \
  -v $(pwd):/backup \
  alpine \
  tar czf /backup/mongo_backup.tar.gz -C /data .

# Restore: extract archive into a new volume
docker volume create mongo_data_restored

docker run --rm \
  -v mongo_data_restored:/data \
  -v $(pwd):/backup \
  alpine \
  tar xzf /backup/mongo_backup.tar.gz -C /data
```

---

## 3. Docker Networks – Container Communication

### The Problem: Containers Are Network-Isolated by Default

Each container runs in its own isolated network namespace. Inside a container, `localhost` refers **only to that container** — not to the host machine or any other container. Without a shared network, containers simply cannot reach each other.

```
Without a shared network:

┌─────────────────┐        ┌─────────────────┐
│  Backend API    │   ✗    │   MongoDB       │
│  localhost:3000 │───────►│  localhost:27017│
└─────────────────┘        └─────────────────┘
    Cannot connect — each container has its own localhost
```

---

### Types of Docker Networks

| Driver | Use Case | DNS Resolution |
|--------|----------|----------------|
| `bridge` | Default; isolated containers on the same host | Only with user-defined bridges |
| `host` | Container shares the host's network stack (Linux only) | N/A |
| `none` | Completely disables all networking | No |
| `overlay` | Multi-host networking (Docker Swarm / Kubernetes) | Yes |
| `macvlan` | Assigns a real MAC address — appears as a physical device | Yes |

> 💡 For almost all development and single-host production scenarios, **user-defined bridge networks** are the correct choice.

---

### Default Bridge vs. User-Defined Bridge

| Feature | Default `bridge` | User-Defined Bridge |
|---------|-----------------|---------------------|
| Automatic DNS (by container name) | ❌ No | ✅ Yes |
| Container isolation | Shared with all containers | Scoped to network |
| Dynamic connect/disconnect | ❌ No | ✅ Yes |
| Recommended for production | ❌ No | ✅ Yes |

---

### Step-by-Step: Connecting a Node.js Backend to MongoDB

```
With a shared user-defined network:

┌─────────────────────────────────────────────┐
│            app-network (bridge)             │
│                                             │
│  ┌──────────────┐      ┌─────────────────┐  │
│  │  backend     │─────►│  mongo          │  │
│  │  :3000       │      │  :27017         │  │
│  └──────────────┘      └─────────────────┘  │
│   hostname: backend     hostname: mongo      │
└─────────────────────────────────────────────┘
```

**Step 1 – Create a custom network:**
```bash
docker network create app-network
```

**Step 2 – Run MongoDB on the network:**
```bash
docker run -d \
  --name mongo \
  --network app-network \
  -v mongo_data:/data/db \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=secret \
  mongo:7
```

**Step 3 – In your backend code, use the container name as the hostname:**
```javascript
// connection.js
const mongoose = require('mongoose');

// Use "mongo" (the container name) as the hostname — NOT localhost
const MONGO_URI = process.env.MONGO_URI || 'mongodb://admin:secret@mongo:27017/myapp?authSource=admin';

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ Connection failed:', err));
```

**Step 4 – Build and run the backend on the same network:**
```bash
docker build -t my-backend .

docker run -d \
  --name backend \
  --network app-network \
  -p 3000:3000 \
  -e MONGO_URI=mongodb://admin:secret@mongo:27017/myapp?authSource=admin \
  my-backend
```

**Step 5 – Verify connectivity:**
```bash
# Check backend logs for successful connection message
docker logs backend

# Test the API endpoint
curl http://localhost:3000/users
```

---

### Connecting Multiple Networks

A container can belong to multiple networks simultaneously:

```bash
# Create two networks
docker network create frontend-net
docker network create backend-net

# Nginx is public-facing — frontend only
docker run -d --name nginx --network frontend-net nginx

# Backend API bridges both networks
docker run -d --name api --network frontend-net my-api
docker network connect backend-net api

# Database is internal — backend only
docker run -d --name db --network backend-net postgres
```

---

### Network Commands Cheat Sheet

| Command | Description |
|---------|-------------|
| `docker network ls` | List all networks |
| `docker network create <name>` | Create a new bridge network |
| `docker network inspect <name>` | Show network details and connected containers |
| `docker network connect <net> <container>` | Attach a running container to a network |
| `docker network disconnect <net> <container>` | Detach a container from a network |
| `docker network rm <name>` | Remove a network |
| `docker network prune` | Remove all unused networks |

---

## 4. Docker Compose – Orchestrating Everything

While running containers manually with `docker run` is great for learning, real applications use **Docker Compose** to define and manage multi-container setups declaratively in a single file.

### Installing Docker Compose

Docker Compose v2 is bundled with Docker Desktop. Verify:
```bash
docker compose version
```

---

### Example: Full Stack App (Node.js + MongoDB + Nginx)

```yaml
# docker-compose.yml
version: '3.9'

services:
  # ─── Reverse Proxy ───────────────────────────────────────────
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
    depends_on:
      - backend
    networks:
      - frontend

  # ─── Backend API ─────────────────────────────────────────────
  backend:
    build:
      context: .
      dockerfile: Dockerfile
    environment:
      - NODE_ENV=production
      - MONGO_URI=mongodb://admin:secret@mongo:27017/myapp?authSource=admin
    depends_on:
      mongo:
        condition: service_healthy
    networks:
      - frontend
      - backend
    restart: unless-stopped

  # ─── Database ─────────────────────────────────────────────────
  mongo:
    image: mongo:7
    environment:
      MONGO_INITDB_ROOT_USERNAME: admin
      MONGO_INITDB_ROOT_PASSWORD: secret
      MONGO_INITDB_DATABASE: myapp
    volumes:
      - mongo_data:/data/db
      - ./mongo-init.js:/docker-entrypoint-initdb.d/init.js:ro
    networks:
      - backend
    healthcheck:
      test: ["CMD", "mongosh", "--eval", "db.adminCommand('ping')"]
      interval: 10s
      timeout: 5s
      retries: 5
    restart: unless-stopped

# ─── Named Volumes ─────────────────────────────────────────────
volumes:
  mongo_data:
    driver: local

# ─── Networks ──────────────────────────────────────────────────
networks:
  frontend:
    driver: bridge
  backend:
    driver: bridge
```

### Docker Compose Commands

```bash
# Start all services (detached)
docker compose up -d

# Start and rebuild images
docker compose up -d --build

# View running services
docker compose ps

# View logs for all services
docker compose logs -f

# View logs for a specific service
docker compose logs -f backend

# Stop all services (keeps volumes)
docker compose down

# Stop and remove volumes (⚠️ deletes all data)
docker compose down -v

# Restart a single service
docker compose restart backend

# Run a one-off command in a service container
docker compose exec backend sh

# Scale a service to multiple instances
docker compose up -d --scale backend=3
```

---

## 5. Complete Workflow – Putting It All Together

Here's a realistic end-to-end workflow using layers, volumes, and networks together:

```bash
# ── Step 1: Build the backend image (leverages layer caching) ──
docker build -t my-backend:1.0 .

# ── Step 2: Create persistent storage for MongoDB ─────────────
docker volume create db_data

# ── Step 3: Create isolated networks ─────────────────────────
docker network create frontend-net
docker network create backend-net

# ── Step 4: Start MongoDB (internal network only) ─────────────
docker run -d \
  --name mongo \
  --network backend-net \
  -v db_data:/data/db \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=secret \
  mongo:7

# ── Step 5: Start backend (bridges both networks) ─────────────
docker run -d \
  --name backend \
  --network backend-net \
  -e MONGO_URI=mongodb://admin:secret@mongo:27017/myapp?authSource=admin \
  my-backend:1.0

docker network connect frontend-net backend

# ── Step 6: Start Nginx reverse proxy (frontend network) ───────
docker run -d \
  --name nginx \
  --network frontend-net \
  -p 80:80 \
  -v $(pwd)/nginx.conf:/etc/nginx/nginx.conf:ro \
  nginx:alpine

# ── Step 7: Verify everything is running ──────────────────────
docker ps
curl http://localhost/users

# ── Step 8: Check logs ────────────────────────────────────────
docker logs backend
docker logs nginx
```

---

## 6. Debugging & Troubleshooting

### Inspect a Running Container

```bash
# Open an interactive shell inside a running container
docker exec -it <container_name> sh    # Alpine-based
docker exec -it <container_name> bash  # Debian/Ubuntu-based

# Check environment variables inside a container
docker exec <container_name> env

# View processes inside a container
docker exec <container_name> ps aux
```

### Network Debugging

```bash
# Check which containers are on a network
docker network inspect app-network

# Test DNS resolution from inside a container
docker exec backend nslookup mongo

# Test connectivity from inside a container
docker exec backend wget -qO- http://mongo:27017

# Install ping/curl inside an Alpine container if needed
docker exec backend apk add --no-cache curl
```

### Volume Debugging

```bash
# See where a named volume is stored on the host
docker volume inspect mongo_data

# Browse volume contents via a temporary container
docker run --rm -it -v mongo_data:/data alpine ls -la /data

# Check disk usage of all images, containers, and volumes
docker system df

# Clean up everything unused (images, containers, networks, volumes)
docker system prune -a --volumes  # ⚠️ Use with caution!
```

### Common Errors & Fixes

| Error | Cause | Fix |
|-------|-------|-----|
| `Connection refused` to another container | Wrong hostname (using `localhost`) | Use container name as hostname on shared network |
| Container exits immediately | Entrypoint crashes or no foreground process | Check `docker logs <name>` for error output |
| `port is already allocated` | Host port already in use | Change the host port: `-p 3001:3000` |
| `No such file or directory` | Bind mount path doesn't exist on host | Create the host directory first |
| `permission denied` on volume | UID mismatch between host and container user | Set `--user` flag or adjust directory permissions |
| Image layer cache not used | Build context changed | Use `.dockerignore` to exclude irrelevant files |

---

## 7. Best Practices

### Images & Layers

- ✅ Use official, minimal base images (e.g., `alpine`, `slim` variants)
- ✅ Combine `RUN` commands using `&&` to minimize layer count
- ✅ Copy `package.json` before source code to maximize cache hits
- ✅ Use `.dockerignore` to keep build context small
- ✅ Tag images with version numbers, not just `latest`
- ✅ Run security scans: `docker scout cves my-image`
- ❌ Never store secrets or credentials in image layers

### Volumes

- ✅ Always use named volumes for databases — never rely on the container layer
- ✅ Use bind mounts only for development (live code sync)
- ✅ Back up volumes before removing containers or running `prune`
- ✅ Use read-only mounts where possible: `-v config.yml:/etc/app/config.yml:ro`
- ❌ Never store sensitive data in anonymous volumes (hard to track)

### Networks

- ✅ Always use user-defined bridge networks (never the default `bridge`)
- ✅ Segment networks by responsibility (frontend / backend)
- ✅ Never expose database ports to the host in production (`-p 27017:27017`)
- ✅ Use container names as hostnames — they auto-resolve on the same network
- ❌ Avoid `--network host` unless you have a specific performance requirement

### Security

```bash
# Run containers as a non-root user
docker run --user 1000:1000 my-image

# Read-only filesystem with writable scratch space
docker run --read-only --tmpfs /tmp my-image

# Drop all Linux capabilities, add back only what's needed
docker run --cap-drop ALL --cap-add NET_BIND_SERVICE my-image

# Limit resources
docker run --memory 512m --cpus 1.0 my-image
```

---

## Summary & Cheat Sheet

### Concepts at a Glance

| Concept | What It Solves | Key Command |
|---------|---------------|-------------|
| **Layers** | Efficient, cacheable image builds | `docker build`, `docker image history` |
| **Volumes** | Data persistence across container restarts | `docker volume create`, `-v name:/path` |
| **Networks** | Container-to-container communication | `docker network create`, `--network` |
| **Compose** | Multi-container orchestration | `docker compose up -d` |

### Quick Reference Card

```bash
# ── Images & Layers ───────────────────────────────────────────
docker build -t myapp:1.0 .              # Build image
docker image history myapp               # View layers
docker images                            # List images
docker rmi myapp:1.0                     # Remove image
docker image prune                       # Remove dangling images

# ── Volumes ───────────────────────────────────────────────────
docker volume create my_vol              # Create volume
docker volume ls                         # List volumes
docker volume inspect my_vol             # Inspect volume
docker volume rm my_vol                  # Remove volume
docker volume prune                      # Remove unused volumes

# ── Networks ──────────────────────────────────────────────────
docker network create my_net             # Create network
docker network ls                        # List networks
docker network inspect my_net            # Inspect network
docker network connect my_net container  # Attach container
docker network rm my_net                 # Remove network

# ── Containers ────────────────────────────────────────────────
docker run -d --name app \               # Run container
  --network my_net \
  -v my_vol:/data \
  -p 3000:3000 myapp:1.0
docker ps                                # List running containers
docker ps -a                             # List all containers
docker logs -f app                       # Stream logs
docker exec -it app sh                   # Shell into container
docker stop app && docker rm app         # Stop and remove

# ── System ────────────────────────────────────────────────────
docker system df                         # Disk usage breakdown
docker system prune -a                   # ⚠️ Remove everything unused
```

---

## Additional Resources

- 📖 [Official Docker Documentation](https://docs.docker.com)
- 🎓 [Docker's Getting Started Tutorial](https://docs.docker.com/get-started/)
- 🔍 [Docker Hub – Official Images](https://hub.docker.com/search?q=&type=image&image_filter=official)
- 🛡️ [Docker Security Best Practices](https://docs.docker.com/engine/security/)
- 📦 [Docker Compose File Reference](https://docs.docker.com/compose/compose-file/)
- 🔧 [Docker Scout – Image Vulnerability Scanning](https://docs.docker.com/scout/)

---

> **Happy Dockering! 🐳**
> 
> Layers make images fast and reusable. Volumes keep your data safe. Networks let your containers work together. Master these three, and you're ready to build production-grade containerized applications.