# 🗺️ AWS Solutions Architect Associate (SAA-C03) – Complete 2026 Roadmap

> *Your definitive guide to mastering cloud architecture and passing the SAA-C03 exam – from fundamentals to exam-ready in 8 weeks.*

[![Made with ❤️](https://img.shields.io/badge/Made%20with-❤️-red.svg)](https://github.com/yourusername)

---

## 📚 Table of Contents

1. [Exam Overview](#exam-overview)
2. [Domain Breakdown & Weightage](#domain-breakdown--weightage)
3. [The 8-Week Study Plan](#the-8-week-study-plan)
   - Weeks 1–2: Foundation & Core Services
   - Weeks 3–4: Deep Dives (Security & Resilience)
   - Weeks 5–6: Performance & Cost Optimization
   - Weeks 7–8: Integration, Review & Practice Exams
4. [Key Services to Master](#key-services-to-master)
5. [Architecture Decision Framework](#architecture-decision-framework)
6. [Recommended Resources](#recommended-resources)
7. [Hands-On Labs](#hands-on-labs)
8. [Practice Exams & Strategy](#practice-exams--strategy)
9. [Tips for Success](#tips-for-success)
10. [Final Checklist](#final-checklist)

---

## 🎯 Exam Overview

The **AWS Certified Solutions Architect – Associate (SAA-C03)** is the most recognized cloud certification in the world. It validates your ability to design **secure, resilient, high-performing, and cost-optimized** architectures using the AWS Well-Architected Framework.

> ⚠️ **Important**: SAA-C03 is **not a memorization exam** – it's a **decision-making exam**. You need to choose the right service and architecture pattern for specific business constraints.

| Aspect | Details |
| :--- | :--- |
| **Exam Code** | SAA-C03 (in effect since August 30, 2022; still current in 2026) |
| **Format** | 65 questions (Multiple choice & multiple response) |
| **Duration** | 130 minutes |
| **Scored Questions** | 50 scored + 15 unscored (pretest, not identified) |
| **Passing Score** | 720 out of 1000 (scaled, compensatory scoring) |
| **Cost** | $150 USD |
| **Validity** | 3 years |
| **Prerequisites** | None required; AWS recommends 1+ year of hands-on AWS experience |
| **Delivery** | Pearson VUE test center or online proctoring |
| **Retake Policy** | 14-day wait between attempts; no lifetime limit |

### 📈 Why This Certification Matters in 2026

- Most recognized cloud certification globally
- Commanded salary premium: **$130,000–$170,000** for Solutions Architect roles in the US
- Standard technical filter for cloud engineer, DevOps, and architect roles
- First-attempt pass rate: **60–72%** (community-reported)
- All-attempts pass rate: **75–85%**

---

## 📊 Domain Breakdown & Weightage

The exam is divided into **four domains**, each testing a pillar of the AWS Well-Architected Framework.

| # | Domain | Weight | Priority | Key Focus Areas |
| :--- | :--- | :--- | :--- | :--- |
| 1 | **Secure Architectures** | 30% | **Critical** | IAM, encryption, network security, compliance |
| 2 | **Resilient Architectures** | 26% | **Critical** | High availability, fault tolerance, disaster recovery, decoupling |
| 3 | **High-Performing Architectures** | 24% | High | Compute, storage, databases, networking optimization |
| 4 | **Cost-Optimized Architectures** | 20% | High | Pricing models, right-sizing, storage tiers, managed services |

> 💡 **Tip**: Domains 1 & 2 together cover **56%** of the exam – prioritise them accordingly.

---

## 🗓️ The 8-Week Study Plan

This plan assumes **1–3 hours of focused study per day**. Adjust the pace based on your availability. The exam is about **trade-offs** – availability, performance, cost, operations, and security.

### Weeks 1–2: Foundation & Core Services

**Goal**: Build a solid understanding of AWS core services and the Well-Architected Framework.

| Week | Day | Topics | Activities |
| :--- | :--- | :--- | :--- |
| **1** | 1–2 | **AWS Global Infrastructure**<br>– Regions, Availability Zones, Edge Locations<br>– Well-Architected Framework (6 pillars) | Read AWS Whitepaper: *Overview of AWS* |
| | 3–4 | **IAM Deep Dive**<br>– Users, Groups, Roles, Policies<br>– Least privilege, policy evaluation logic<br>– Cross-account access, SCPs, permission boundaries | Hands-on: Create IAM roles with trust policies |
| | 5–6 | **Compute Services**<br>– EC2 (instance families, purchasing options)<br>– Lambda (serverless, event-driven)<br>– ECS, EKS, Fargate (containers) | Launch EC2 instances (Spot, On-Demand, Reserved) |
| | 7 | **Review & Quiz** | Practice questions on IAM & Compute |
| **2** | 1–2 | **Storage Services**<br>– S3 (storage classes, lifecycle, versioning)<br>– EBS (volume types, snapshots)<br>– EFS (file storage)<br>– S3 Glacier (archival) | Create S3 buckets with lifecycle rules |
| | 3–4 | **Database Services**<br>– RDS (Aurora, Multi-AZ, Read Replicas)<br>– DynamoDB (DAX, on-demand vs provisioned)<br>– Redshift, ElastiCache | Launch an RDS instance with read replicas |
| | 5–6 | **Networking Fundamentals**<br>– VPC (subnets, route tables, IGW, NAT)<br>– Security Groups vs NACLs<br>– VPC Flow Logs, VPC Peering, Transit Gateway | Build a custom VPC with public/private subnets |
| | 7 | **Review & Quiz** | Practice questions on Storage, DB & Networking |

> ✅ **Checkpoint**: You should be able to explain the difference between Security Groups (stateful, instance-level) and NACLs (stateless, subnet-level).

---

### Weeks 3–4: Deep Dives (Security & Resilience)

**Goal**: Master the two highest-weighted domains – Security (30%) and Resilience (26%).

| Week | Day | Topics | Activities |
| :--- | :--- | :--- | :--- |
| **3** | 1–2 | **Encryption & Key Management**<br>– Encryption at rest: SSE-S3, SSE-KMS, SSE-C, EBS encryption, RDS encryption<br>– Encryption in transit: TLS/SSL, ACM<br>– AWS KMS, CloudHSM | Configure S3 bucket encryption with KMS |
| | 3–4 | **Security Services**<br>– AWS Shield (Standard vs Advanced)<br>– AWS WAF (web application firewall)<br>– AWS GuardDuty (threat detection)<br>– AWS Inspector (vulnerability scanning)<br>– AWS Macie, AWS Artifact | Explore AWS Shield and WAF capabilities |
| | 5–6 | **Identity Federation & SSO**<br>– IAM Identity Center (successor to SSO)<br>– SAML 2.0, OIDC integration<br>– Service-linked roles | Set up IAM Identity Center |
| | 7 | **Review & Quiz – Security** | Take a domain-1 practice test |
| **4** | 1–2 | **High Availability & Fault Tolerance**<br>– Multi-AZ deployments<br>– Auto Scaling (Launch Templates, Scaling Policies)<br>– Elastic Load Balancing (ALB vs NLB vs CLB) | Configure an Auto Scaling group with ALB |
| | 3–4 | **Disaster Recovery (DR)**<br>– RTO & RPO concepts<br>– Backup & restore, Pilot Light, Warm Standby, Multi‑site active‑active<br>– AWS Backup, Database snapshots | Design a DR strategy for an RDS database |
| | 5–6 | **Decoupling & Messaging**<br>– SQS (queues, FIFO, dead-letter)<br>– SNS (pub/sub, fan-out)<br>– EventBridge (event-driven architectures)<br>– Step Functions (orchestration) | Build a decoupled architecture with SQS + Lambda |
| | 7 | **Review & Quiz – Resilience** | Take a domain-2 practice test |

> ✅ **Checkpoint**: You should be able to design a Multi-AZ, highly available architecture and explain the trade-offs between different DR strategies.

---

### Weeks 5–6: Performance & Cost Optimization

**Goal**: Master High-Performing (24%) and Cost-Optimized (20%) architectures.

| Week | Day | Topics | Activities |
| :--- | :--- | :--- | :--- |
| **5** | 1–2 | **Performance Optimization – Compute & Storage**<br>– EC2 instance families (Graviton, Intel, AMD)<br>– Storage performance (IOPS, throughput)<br>– EBS volume types (gp2, gp3, io1, io2)<br>– S3 Transfer Acceleration, S3 Multipart Upload | Compare EBS volume types and their use cases |
| | 3–4 | **Performance Optimization – Databases & Caching**<br>– Database selection (RDS vs Aurora vs DynamoDB)<br>– Read Replicas, Aurora Replicas<br>– ElastiCache (Redis vs Memcached)<br>– DAX (DynamoDB Accelerator) | Set up ElastiCache to cache database queries |
| | 5–6 | **Performance Optimization – Networking & Edge**<br>– CloudFront (CDN) with Origin Shield<br>– Route 53 (routing policies: simple, weighted, latency, geolocation, failover)<br>– AWS Global Accelerator<br>– Direct Connect vs VPN | Configure CloudFront distribution with S3 origin |
| | 7 | **Review & Quiz – Performance** | Take a domain-3 practice test |
| **6** | 1–2 | **Cost Optimization – Pricing Models**<br>– On-Demand vs Reserved Instances vs Spot Instances vs Savings Plans<br>– Compute Savings Plans vs EC2 Instance Savings Plans<br>– S3 Storage Classes (Standard, IA, One Zone-IA, Glacier, Glacier Deep Archive) | Use AWS Pricing Calculator to estimate architecture cost |
| | 3–4 | **Cost Optimization – Right-Sizing & Monitoring**<br>– AWS Compute Optimizer<br>– AWS Cost Explorer, AWS Budgets<br>– Trusted Advisor (cost checks)<br>– S3 Lifecycle Policies, EBS Snapshots | Analyze cost reports with Cost Explorer |
| | 5–6 | **Cost Optimization – Managed Services vs Self-Managed**<br>– When to use serverless (Lambda, Fargate)<br>– Managed databases (RDS, DynamoDB) vs self-managed on EC2<br>– Data transfer costs (VPC endpoints vs NAT Gateway) | Compare costs of managed vs self-managed database |
| | 7 | **Review & Quiz – Cost Optimization** | Take a domain-4 practice test |

> ✅ **Checkpoint**: You should be able to recommend the most cost-effective architecture for a given workload while meeting performance requirements.

---

### Weeks 7–8: Integration, Review & Practice Exams

**Goal**: Connect all domains, identify weak areas, and build exam stamina.

| Week | Day | Topics | Activities |
| :--- | :--- | :--- | :--- |
| **7** | 1–2 | **Integration & Migration**<br>– AWS Migration Hub, DMS, SMS<br>– Application Migration Service (MGN)<br>– DataSync, Snow Family (Snowball, Snowcone, Snowmobile) | Read migration whitepapers |
| | 3–4 | **Management & Governance**<br>– CloudWatch (metrics, logs, alarms)<br>– CloudTrail (audit logging)<br>– AWS Config (compliance, resource inventory)<br>– AWS Organizations (multi-account management) | Set up CloudWatch alarms and CloudTrail trails |
| | 5–6 | **Advanced Architecture Patterns**<br>– Multi-tier architectures<br>– Microservices vs monolithic<br>– Event-driven architectures<br>– Serverless architectures<br>– Hybrid cloud architectures | Design a complete 3-tier architecture |
| | 7 | **Review & Quiz – Integration** | Take a mixed-domain practice test |
| **8** | 1–2 | **Full Mock Exam #1** – Timed (130 min) | Use a practice test; score > 75% |
| | 3–4 | **Review Mistakes & Weak Areas** | Revisit corresponding notes and labs |
| | 5–6 | **Full Mock Exam #2** – Timed (130 min) | Second full-length practice exam |
| | 7 | **Final Review & Confidence Boost** | Review cheat sheet; relax before exam day |

> ✅ **Checkpoint**: You should be scoring **>75%** on practice exams and be able to explain *why* each answer is correct or incorrect.

---

## ☁️ Key Services to Master

SAA-C03 tests your ability to **choose the right service** for a given scenario. Focus on **use cases**, not just features.

### Compute

| Service | What it does | When to Use |
| :--- | :--- | :--- |
| **EC2** | Virtual machines (IaaS) | Lift-and-shift, custom OS, long-running workloads |
| **Lambda** | Serverless, event-driven compute | Short-running (<15 min), unpredictable traffic, cost-sensitive |
| **ECS / EKS** | Container orchestration | Microservices, consistent environments |
| **Fargate** | Serverless containers | Containerized workloads without managing control plane |
| **Elastic Beanstalk** | PaaS for web apps | Quick deployment of web applications |

### Storage

| Service | What it does | When to Use |
| :--- | :--- | :--- |
| **S3** | Object storage | Static assets, backups, data lakes, logs |
| **S3 Glacier** | Archival storage | Long-term retention, compliance |
| **EBS** | Block storage for EC2 | Database volumes, boot volumes |
| **EFS** | File storage (NFS) | Shared file systems for Linux EC2 |
| **FSx** | Managed file systems | Windows workloads, Lustre (HPC) |

### Databases

| Service | What it does | When to Use |
| :--- | :--- | :--- |
| **RDS** | Managed relational DB (SQL) | Traditional applications, ACID transactions |
| **Aurora** | MySQL/PostgreSQL-compatible, cloud-native | High-performance, read-heavy workloads |
| **DynamoDB** | NoSQL key-value/document DB | Serverless, high-scale, low-latency |
| **Redshift** | Data warehouse | Analytics, BI reporting |
| **ElastiCache** | In-memory cache | Read-heavy workloads, session store |

### Networking & Content Delivery

| Service | What it does | When to Use |
| :--- | :--- | :--- |
| **VPC** | Private network in AWS | Isolated environment for resources |
| **Route 53** | DNS service | Domain registration, routing, health checks |
| **CloudFront** | CDN | Global content delivery, static assets |
| **Global Accelerator** | Anycast networking | Improve global performance, failover |
| **Direct Connect** | Dedicated network connection | Hybrid cloud, high bandwidth, low latency |

### Security & Identity

| Service | What it does | When to Use |
| :--- | :--- | :--- |
| **IAM** | Identity & Access Management | Authentication, authorization |
| **KMS** | Key Management Service | Encryption key management |
| **Shield** | DDoS protection | Always-on protection (Standard) or advanced (Shield Advanced) |
| **WAF** | Web Application Firewall | Protect web apps from common exploits |
| **GuardDuty** | Threat detection | Continuous security monitoring |
| **Inspector** | Vulnerability scanning | Automate security assessments |

### Application Integration

| Service | What it does | When to Use |
| :--- | :--- | :--- |
| **SQS** | Message queuing | Decouple components, buffer requests |
| **SNS** | Pub/sub messaging | Fan-out notifications, event-driven |
| **EventBridge** | Event bus | Connect applications, SaaS integrations |
| **Step Functions** | Workflow orchestration | Coordinate Lambda functions, state machines |

### Management & Governance

| Service | What it does | When to Use |
| :--- | :--- | :--- |
| **CloudWatch** | Monitoring & observability | Metrics, logs, alarms |
| **CloudTrail** | API auditing | Compliance, security investigations |
| **Config** | Resource compliance | Track configuration changes, audit |
| **Organizations** | Multi-account management | Consolidated billing, policy guardrails |
| **Trusted Advisor** | Best practices recommendations | Cost, security, performance, fault tolerance |

---

## 🧠 Architecture Decision Framework

SAA-C03 is about **trade-offs**. Use this framework to evaluate every question:

### Step 1: Identify the Constraint
- **Secure** → IAM policies, encryption, private access, compliance boundaries
- **Highly Available / Fault Tolerant** → Multi-AZ, failover, decoupling
- **Low Latency** → Caching, edge services, global accelerator
- **Scalable** → Auto Scaling, serverless, partitioning
- **Least Operational Effort** → Managed services, serverless
- **Lowest Cost** → Right-sizing, Spot, storage tiers, managed services

### Step 2: Determine the Failure Domain
- Must survive **Instance** failure? → Auto Scaling, ELB
- Must survive **AZ** failure? → Multi-AZ deployment, cross-AZ replication
- Must survive **Region** failure? → Cross-region replication, Route 53 failover
- Must survive **Dependency** failure? → Circuit breakers, retries, dead-letter queues

### Step 3: Map Access Path
- Who or what is accessing the service? (Users, EC2, Lambda, other services)
- Over which network path? (Public internet, VPC, VPN, Direct Connect)
- With which identity? (IAM role, IAM user, federated identity)
- With which encryption? (At rest, in transit, KMS keys)

### Step 4: Match Data Behavior
- Access pattern: Read-heavy, write-heavy, unpredictable, streaming?
- Consistency requirements: Strong vs eventual?
- Durability requirements: RPO, RTO?
- Storage selection: Object, block, file, database?

### Step 5: Evaluate Operational Effort
- Prefer **managed services** when they satisfy the requirement
- Keep **self-managed** only when the stem requires control (e.g., custom OS)

### Step 6: Consider Cost
- Optimize the largest waste source first: idle compute, data transfer, wrong storage tier
- Right-size instances, choose appropriate storage classes, use Spot where possible

### Step 7: Choose the Simplest Answer
- If two answers both work, choose the one with **fewer moving parts, narrower permissions, simpler operations**9†L45-L46

---

## 📚 Recommended Resources

| Type | Resource | Why |
| :--- | :--- | :--- |
| **Official** | [AWS Certification Exam Guide](https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/solutions-architect-associate-03.html) | Authoritative source of exam domains |
| **Official Course** | [AWS Skill Builder – Architecting on AWS](https://aws.amazon.com/training/architecting/) | Official 3-day course (paid) |
| **Free Course** | [AWS Certified Solutions Architect – Associate (Coursera)](https://www.coursera.org/learn/aws-certified-architect-associate) | Structured video content |
| **Video Course** | [Udemy – Stephane Maarek's SAA-C03 Course](https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/) | Most recommended, comprehensive |
| **Video Course** | [Udemy – Adrian Cantrill's SAA-C03 Course](https://learn.cantrill.io/) | Deep technical depth, hands-on |
| **Practice Exams** | [Tutorials Dojo SAA-C03 Practice Exams](https://portal.tutorialsdojo.com/courses/aws-certified-solutions-architect-associate-practice-exams/) | Realistic questions, detailed explanations |
| **Practice Exams** | [Udemy – Jon Bonso's Practice Exams](https://www.udemy.com/course/aws-certified-solutions-architect-associate-practice-tests/) | Highly rated |
| **Free Practice** | [GitHub – Amitpnk SAA-C03 Prep](https://github.com/Amitpnk/AWS-Solutions-Architect-Associate-Exam) | Interactive web app, cheat sheet |
| **Cheat Sheet** | [TechExamLexicon SAA-C03 Cheat Sheet](https://techexamlexicon.com/aws/saa-c03/cheat-sheet/) | Service mapping, trade-offs, traps |
| **Blog** | [Dev.to SAA-C03 Prep Guide](https://dev.to/datanestdigital/aws-solutions-architect-certification-prep-guide-2026-1mf7) | Week-by-week plan, domain breakdown |

---

## 🧪 Hands-On Labs (Free Tier)

Practical experience is **essential**. Use the **AWS Free Tier** to complete these labs:

| Lab | What You'll Learn | Time |
| :--- | :--- | :--- |
| **1. Build a VPC** | Create VPC with public/private subnets, IGW, NAT Gateway, route tables | 60 min |
| **2. Launch EC2 with Auto Scaling** | Launch Template, Auto Scaling Group, ALB, health checks | 60 min |
| **3. S3 Static Website** | Create S3 bucket, enable static hosting, configure CloudFront | 30 min |
| **4. RDS with Read Replicas** | Launch RDS instance, create read replica, test failover | 60 min |
| **5. Serverless API (API Gateway + Lambda + DynamoDB)** | Build a serverless REST API | 90 min |
| **6. IAM Policies & Roles** | Create IAM roles with trust policies, test cross-account access | 45 min |
| **7. SQS + Lambda** | Decouple application with SQS, trigger Lambda on messages | 45 min |
| **8. ElastiCache for Caching** | Set up Redis cluster, cache database queries | 60 min |
| **9. S3 Lifecycle & Encryption** | Configure lifecycle rules, enable KMS encryption | 30 min |
| **10. CloudWatch + CloudTrail** | Set up alarms, enable CloudTrail, analyze logs | 45 min |

---

## 🧠 Practice Exams & Strategy

**Practice is non-negotiable.** Aim for **4–6 full-length mock exams** before the real test.

### Recommended Practice Approach

| Phase | What to Do |
| :--- | :--- |
| **Weeks 1–4** | Take domain-specific quizzes after each domain |
| **Weeks 5–6** | Take mixed-domain practice tests (untimed) |
| **Week 7** | Take first full timed mock exam (130 min) |
| **Week 8** | Take 2–3 more full timed mock exams |
| **Final** | Review all incorrect answers and understand *why* |

### What to Look For in Practice Exams

- ✅ Scenario-based questions ("A company wants to... Which service should they use?")
- ✅ Detailed explanations for every answer (why correct, why others are wrong)
- ✅ Timed mode to simulate the real exam
- ✅ Questions that test trade-offs, not just definitions

> ⚠️ **Avoid**: "Brain dumps" (actual exam questions from memory) – they are against AWS policies and often outdated.

---

## 💡 Tips for Success

### 1. Think Like an Architect
SAA-C03 tests **decision-making**, not memorization. For each service, ask: *"When would I use this? What are the trade-offs?"*

### 2. Master the Well-Architected Framework
The exam is based on the **6 pillars**:
- Operational Excellence
- **Security** (30% of exam)
- **Reliability** (26% of exam)
- **Performance Efficiency** (24% of exam)
- **Cost Optimization** (20% of exam)
- Sustainability

### 3. Understand the "Least Privilege" Principle
Security questions often test IAM policies, SCPs, and permission boundaries. Always choose the option with the **narrowest permissions** that still satisfies the requirement.

### 4. Know Your Storage Classes
S3 has **multiple storage classes** – understand when to use each:
- **S3 Standard**: Frequently accessed data
- **S3 Intelligent-Tiering**: Unknown access patterns
- **S3 Standard-IA**: Infrequently accessed, but needs quick access
- **S3 One Zone-IA**: Infrequent access, non-critical data
- **S3 Glacier**: Long-term archive (retrieval in minutes to hours)
- **S3 Glacier Deep Archive**: Longest-term archive (retrieval in hours)

### 5. Understand Database Choices
| Workload | Best Database |
| :--- | :--- |
| Traditional applications, ACID | RDS (MySQL, PostgreSQL, Oracle) |
| High-performance, read-heavy | Aurora (MySQL/PostgreSQL compatible) |
| Serverless, high-scale, low-latency | DynamoDB |
| Analytics, BI | Redshift |
| In-memory caching | ElastiCache |

### 6. Know Your Load Balancers
- **ALB (Application Load Balancer)**: Layer 7, HTTP/HTTPS, path-based routing, host-based routing
- **NLB (Network Load Balancer)**: Layer 4, TCP/UDP, ultra-low latency, static IP
- **CLB (Classic Load Balancer)**: Legacy, Layer 4/7 – avoid unless mentioned

### 7. Practice Time Management
- 65 questions in 130 minutes = **2 minutes per question**
- Flag difficult questions and move on – return if time permits
- No penalty for guessing

### 8. Use Compensatory Scoring
The exam uses **compensatory scoring** – you don't need to pass each domain individually. A strong performance in one domain can compensate for a weaker performance in another.

### 9. Read the Question Twice
SAA-C03 questions often contain **critical constraints** in the last sentence. Read the entire question carefully before looking at the options.

### 10. Eliminate Wrong Answers
In most questions, **two options are obviously wrong**. Focus on the remaining two and choose based on the specific constraint in the question.

---

## ✅ Final Checklist

Use this checklist to ensure you're fully prepared before booking the exam.

### Domain 1: Secure Architectures (30%)
- [ ] I understand IAM: Users, Groups, Roles, Policies, and Least Privilege
- [ ] I can explain the policy evaluation logic: Explicit Deny > Explicit Allow > Implicit Deny
- [ ] I know the difference between Security Groups and NACLs
- [ ] I understand encryption at rest (SSE-S3, SSE-KMS, SSE-C, EBS, RDS)
- [ ] I understand encryption in transit (TLS/SSL, ACM)
- [ ] I know the security services: Shield, WAF, GuardDuty, Inspector, Macie
- [ ] I understand VPC Flow Logs and their use cases

### Domain 2: Resilient Architectures (26%)
- [ ] I can design Multi-AZ architectures for high availability
- [ ] I understand Auto Scaling and Elastic Load Balancing
- [ ] I understand disaster recovery strategies: Backup & Restore, Pilot Light, Warm Standby, Multi-site
- [ ] I know RTO and RPO concepts
- [ ] I understand decoupling with SQS, SNS, and EventBridge
- [ ] I know how to use Route 53 routing policies (failover, weighted, latency, geolocation)

### Domain 3: High-Performing Architectures (24%)
- [ ] I understand EC2 instance families and purchasing options
- [ ] I know S3 storage classes and when to use each
- [ ] I understand database selection: RDS vs Aurora vs DynamoDB vs Redshift
- [ ] I know caching solutions: ElastiCache (Redis/Memcached), DAX
- [ ] I understand CloudFront (CDN) and Global Accelerator
- [ ] I understand VPC endpoints (Gateway vs Interface)

### Domain 4: Cost-Optimized Architectures (20%)
- [ ] I understand pricing models: On-Demand, Reserved, Spot, Savings Plans
- [ ] I can use AWS Pricing Calculator and Cost Explorer
- [ ] I understand S3 lifecycle policies for cost optimization
- [ ] I know when to use managed services vs self-managed
- [ ] I understand data transfer costs and VPC endpoints vs NAT Gateway
- [ ] I know AWS Budgets and Trusted Advisor cost checks

### General Preparation
- [ ] I have completed the AWS Skill Builder or equivalent course
- [ ] I have completed 10+ hands-on labs in the AWS Free Tier
- [ ] I have taken 4+ full-length practice exams (scoring >75%)
- [ ] I have reviewed all incorrect answers and filled knowledge gaps
- [ ] I have read the AWS Well-Architected Framework whitepapers
- [ ] I have reviewed the official SAA-C03 exam guide
- [ ] I have booked the exam with Pearson VUE

---

## 📊 Quick Reference Cheat Sheet

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    SAA-C03 MASTER CHEAT SHEET                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  EXAM FACTS                                                                 │
│  ──────────                                                                 │
│  • 65 questions, 130 min, 720/1000 passing score                           │
│  • 50 scored + 15 unscored (pretest)                                       │
│  • $150 USD, valid 3 years                                                 │
│                                                                             │
│  DOMAIN WEIGHTS                                                             │
│  ──────────────                                                             │
│  1. Secure Architectures     30%  ← CRITICAL                               │
│  2. Resilient Architectures  26%  ← CRITICAL                               │
│  3. High-Performing          24%  ← HIGH                                   │
│  4. Cost-Optimized           20%  ← HIGH                                   │
│                                                                             │
│  KEY DIFFERENCES                                                            │
│  ─────────────────                                                          │
│  • Security Group: Stateful, instance-level, allow inbound/outbound        │
│  • NACL: Stateless, subnet-level, rules processed in order                 │
│  • ALB: Layer 7, HTTP/HTTPS, path-based routing                            │
│  • NLB: Layer 4, TCP/UDP, static IP, ultra-low latency                     │
│  • S3 Standard: Frequent access                                            │
│  • S3 IA: Infrequent access, quick retrieval                               │
│  • S3 Glacier: Archive, retrieval in minutes                               │
│  • S3 Glacier Deep Archive: Longest-term archive, retrieval in hours       │
│  • RDS: Relational, ACID, managed SQL                                      │
│  • DynamoDB: NoSQL, serverless, high-scale                                 │
│  • Aurora: MySQL/PostgreSQL compatible, cloud-native, high-performance     │
│                                                                             │
│  DECISION FRAMEWORK                                                         │
│  ─────────────────                                                          │
│  1. Identify constraint (secure? HA? low-cost? low-latency?)               │
│  2. Determine failure domain (instance? AZ? Region?)                       │
│  3. Map access path (who, how, what identity?)                             │
│  4. Match data behavior (access pattern, consistency, durability)          │
│  5. Evaluate operational effort (managed > self-managed)                   │
│  6. Consider cost (right-size, storage tier, purchase option)              │
│  7. Choose simplest answer that satisfies all constraints                  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 🚀 Final Words

The SAA-C03 is the **most valuable cloud certification** you can earn. It validates your ability to design real-world, enterprise-grade architectures. The exam is challenging – but with the right preparation strategy, hands-on practice, and a focus on **trade-offs and decision-making**, you can pass on your first attempt.

> 💡 **Remember**: "The best answer is rarely the most powerful service; it is the lowest-complexity architecture that satisfies the named security, resilience, performance, cost, and operational constraints."

**Best of luck!** 🎉

---

*Happy architecting! ☁️*