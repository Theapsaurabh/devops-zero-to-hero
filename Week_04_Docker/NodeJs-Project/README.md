# 🚀 Node.js Dockerized App (First Docker Project)

This is my **first Docker project**, where I containerized a simple Node.js application using Express.

---

## 📌 What I Learned Today

- What is Docker
- What is an Image
- What is a Container
- How Docker works
- Writing a Dockerfile
- Building Docker Images
- Running Containers
- Exposing Ports
- Pushing Images to Docker Hub

---

## 🧠 Key Concepts

### 🔹 Docker
Docker is a tool that allows you to package your application along with all dependencies into a container.

---

### 🔹 Image
- Blueprint of your application
- Contains code + dependencies + environment

👉 Example:
```bash
docker build -t hello-world-app .
```
## 🔹 Container
Running instance of an image
Executes your application

👉 Example:
```
docker run -p 3000:3000 hello-world-app
```

## 📂 Project Structure
```
NodeJs-Project/
│
├── Dockerfile
├── package.json
├── package-lock.json
└── index.js
```


## ⚙️ Dockerfile Explanation

```

FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

```

## 🔍 Breakdown
 - FROM node:22-alpine → lightweight Node.js base image
 - WORKDIR /app → sets working directory
 - COPY package*.json ./ → copy dependencies file
 - RUN npm install → install dependencies
 - COPY . . → copy project files
 - EXPOSE 3000 → expose port
 - CMD ["npm", "start"] → run app

 ## 🧑‍💻 Application Code

 ```
 const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("hello i am here to write dockerfile and learn docker");
  res.send("Hello World");
});

app.listen(3000, "0.0.0.0");
 ```

 ### 🚀 How to Run the Project
## 1️⃣ Build Docker Image
```
docker build -t hello-world-app .
```

## 2️⃣ Run Docker Container

```
docker run -p 3000:3000 hello-world-app

```
## 3️⃣ Open in Browser

```
http://localhost:3000
```

### 🎯 Conclusion

## Today I successfully:

- Built my first Docker image
- Ran a container
- Fixed real errors
- Understood core Docker concepts

### This is my first step toward DevOps and scalable deployments 🚀